import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TransformationSection.css";

function TransformationSection() {
  const stages = [
    {
      image: `${process.env.PUBLIC_URL}/assets/images/transform-1.webp`,
      alt: "Priprema vozila prije lakiranja",
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/images/transform-2.webp`,
      alt: "Vozilo tijekom pripreme za lakiranje",
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/images/transform-3.webp`,
      alt: "Vozilo tijekom promjene boje",
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/images/transform-4.webp`,
      alt: "Završeni izgled vozila",
    },
  ];

  const [activeStage, setActiveStage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      setActiveStage((currentStage) =>
        currentStage === stages.length - 1 ? 0 : currentStage + 1
      );
    }, 4000);

    return () => clearTimeout(timer);
  }, [activeStage, isPaused, stages.length]);

  const getSlidePosition = (index) => {
    let difference = index - activeStage;

    if (difference > stages.length / 2) {
      difference -= stages.length;
    }

    if (difference < -stages.length / 2) {
      difference += stages.length;
    }

    if (difference === 0) return "center";
    if (difference === 1) return "right";
    if (difference === -1) return "left";

    return "hidden";
  };

  return (
    <section
      className="transformation-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="transformation-inner">
        <h2 className="transformation-title">
          Va<span className="transformation-caron">s</span>e vozilo zaslu
          <span className="transformation-caron">z</span>uje{" "}
          <span className="transformation-brand">Pali Colors</span> tretman
        </h2>

        <div className="transformation-slider">
          {stages.map((stage, index) => {
            const position = getSlidePosition(index);

            return (
              <button
                key={stage.image}
                className={`transformation-slide transformation-slide-${position}`}
                onClick={() => setActiveStage(index)}
                aria-label={`Prikaži fazu ${index + 1}`}
              >
                <img src={stage.image} alt={stage.alt} />
              </button>
            );
          })}
        </div>

        <div className="transformation-dots">
          {stages.map((stage, index) => (
            <button
              key={stage.image}
              className={`transformation-dot ${
                activeStage === index ? "active" : ""
              }`}
              onClick={() => setActiveStage(index)}
              aria-label={`Prikaži fazu ${index + 1}`}
            ></button>
          ))}
        </div>

        <p className="transformation-text">
          Imate oštećenje koje želite sanirati, planirate kompletno lakiranje
          ili svom automobilu želite dati novi izgled?
        </p>

        <p className="transformation-text transformation-text-bottom">
          Pošaljite nam upit i dogovorite procjenu.
        </p>

        <div className="transformation-buttons">
          <Link
            to="/kontakt"
            className="transformation-button transformation-button-dark"
          >
            Zatražite ponudu
          </Link>

          <Link
            to="/kontakt"
            className="transformation-button transformation-button-blue"
          >
            Kontaktirajte nas
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TransformationSection;