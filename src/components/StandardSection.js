import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./StandardSection.css";

function StandardSection() {
  const standards = [
    {
      title: "Preciznost",
      text: "Detalji čine razliku. Svakom projektu pristupamo s maksimalnom pažnjom.",
      image: `${process.env.PUBLIC_URL}/assets/images/standard-preciznost.webp`,
    },
    {
      title: "Vrhunska kvaliteta",
      text: "Koristimo kvalitetne materijale i moderne tehnike kako bismo postigli dugotrajan rezultat.",
      image: `${process.env.PUBLIC_URL}/assets/images/standard-kvaliteta.webp`,
    },
    {
      title: "Individualan pristup",
      text: "Svaki automobil je drugačiji. Zato svakom projektu pristupamo zasebno.",
      image: `${process.env.PUBLIC_URL}/assets/images/standard-pristup.webp`,
    },
    {
      title: "Povjerenje",
      text: "Jasna komunikacija, profesionalan odnos i sigurnost da je vaše vozilo u pravim rukama.",
      image: `${process.env.PUBLIC_URL}/assets/images/standard-povjerenje.webp`,
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const minSwipeDistance = 50;

  const nextSlide = () => {
    setActiveSlide((currentSlide) =>
      currentSlide === standards.length - 1 ? 0 : currentSlide + 1
    );
  };

  const previousSlide = () => {
    setActiveSlide((currentSlide) =>
      currentSlide === 0 ? standards.length - 1 : currentSlide - 1
    );
  };

  const handleTouchStart = (event) => {
    setIsPaused(true);

    touchEndX.current = null;
    touchStartX.current = event.targetTouches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current !== null &&
      touchEndX.current !== null
    ) {
      const distance =
        touchStartX.current - touchEndX.current;

      if (distance > minSwipeDistance) {
        nextSlide();
      }

      if (distance < -minSwipeDistance) {
        previousSlide();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;

    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      setActiveSlide((currentSlide) =>
        currentSlide === standards.length - 1
          ? 0
          : currentSlide + 1
      );
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeSlide, isPaused, standards.length]);

  const currentStandard = standards[activeSlide];

  return (
    <section
      className="standard-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="standard-wrapper"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        <div className="standard-card">
          <p className="standard-brand">
            PALI COLORS
          </p>

          <h2>Standard</h2>

          <p className="standard-subtitle">
            Bez kompromisa kada je rezultat u pitanju
          </p>

          <h3>{currentStandard.title}</h3>

          <p className="standard-text">
            {currentStandard.text}
          </p>

          <Link
            to="/kontakt"
            className="standard-button"
          >
            Zatražite ponudu
          </Link>

          <div className="standard-dots">
            {standards.map((standard, index) => (
              <button
                key={standard.title}
                className={`standard-dot ${
                  activeSlide === index ? "active" : ""
                }`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Prikaži ${standard.title}`}
              ></button>
            ))}
          </div>
        </div>

        <div className="standard-image-wrapper">
          <img
            key={activeSlide}
            src={currentStandard.image}
            alt={currentStandard.title}
            className="standard-image"
          />
        </div>
      </div>
    </section>
  );
}

export default StandardSection;