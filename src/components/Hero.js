import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const videoPath = `${process.env.PUBLIC_URL}/assets/video/hero-video.mp4`;

  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoPath} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-small-title">PALI COLORS</p>

        <h1>
          Savr<span className="hero-s-caron">s</span>ena boja.
          <span className="hero-title-line">
            Besprijekoran fini<span className="hero-s-caron">s</span>.
          </span>
        </h1>

        <p className="hero-description">
          Preciznost koju vidite. Kvaliteta koju osjećate.
        </p>

        <div className="hero-buttons">
          <Link to="/usluge" className="hero-btn hero-btn-light">
            Pogledajte usluge
          </Link>

          <Link to="/kontakt" className="hero-btn hero-btn-blue">
            Zatražite ponudu
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;