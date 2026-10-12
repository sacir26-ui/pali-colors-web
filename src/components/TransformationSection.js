import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./TransformationSection.css";

function TransformationSection() {
  const slides = [
    `${process.env.PUBLIC_URL}/assets/images/transform-1.webp`,
    `${process.env.PUBLIC_URL}/assets/images/transform-2.webp`,
    `${process.env.PUBLIC_URL}/assets/images/transform-3.webp`,
    `${process.env.PUBLIC_URL}/assets/images/transform-4.webp`,
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const minSwipeDistance = 50;

  const nextSlide = () => {
    setActiveSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
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
    setActiveSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  }, 4000);

  return () => clearTimeout(timer);
}, [activeSlide, isPaused, slides.length]);

  const getSlidePosition = (index) => {
    const previousIndex =
      activeSlide === 0
        ? slides.length - 1
        : activeSlide - 1;

    const nextIndex =
      activeSlide === slides.length - 1
        ? 0
        : activeSlide + 1;

    if (index === activeSlide) {
      return "center";
    }

    if (index === previousIndex) {
      return "left";
    }

    if (index === nextIndex) {
      return "right";
    }

    return "hidden";
  };

  return (
    <section
      className="transformation-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="transformation-inner">
        <div className="transformation-heading">
          <h2>
            Va
            <span className="transformation-caron">
              s
            </span>
            e vozilo zaslu
            <span className="transformation-caron">
              z
            </span>
            uje{" "}
            <span className="transformation-brand">
              Pali Colors
            </span>{" "}
            tretman
          </h2>
        </div>

        <div
          className="transformation-carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          {slides.map((slide, index) => {
            const position = getSlidePosition(index);

            return (
              <button
                type="button"
                className={`transformation-slide transformation-slide-${position}`}
                key={slide}
                onClick={() => setActiveSlide(index)}
                aria-label={`Prikaži fotografiju ${index + 1}`}
              >
                <img
                  src={slide}
                  alt={`Pali Colors faza rada ${index + 1}`}
                />
              </button>
            );
          })}
        </div>

        <div className="transformation-dots">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide}
              className={`transformation-dot ${
                activeSlide === index ? "active" : ""
              }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Prikaži fotografiju ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="transformation-content">
          <p>
            Imate oštećenje koje želite sanirati,
            planirate kompletno lakiranje ili svom
            automobilu želite dati novi izgled?
          </p>

          <p>
            Pošaljite nam upit i dogovorite procjenu.
          </p>

          <div className="transformation-buttons">
            <Link
              to="/kontakt"
              className="transformation-button transformation-button-primary"
            >
              Zatražite ponudu
            </Link>

            <Link
              to="/kontakt"
              className="transformation-button transformation-button-secondary"
            >
              Kontaktirajte nas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TransformationSection;