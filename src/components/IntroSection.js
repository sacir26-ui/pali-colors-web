import "./IntroSection.css";

function IntroSection() {
  const introImage = `${process.env.PUBLIC_URL}/assets/images/intro-car.png`;
  const patternImage = `${process.env.PUBLIC_URL}/assets/images/intro-pattern.png`;

  return (
    <section className="intro-section">
      <div className="intro-inner">
        <div className="intro-content">
         

          <h2>
            <span className="intro-title-main">Premium auto</span>
            <span className="intro-title-accent">lakiranje</span>
          </h2>

          <p className="intro-text">
            Pali Colors je moderna autolakirnica u Zagrebu specijalizirana za
            visokokvalitetno lakiranje, obnovu i personalizaciju vozila.
          </p>

          <p className="intro-text">
            Spajamo vrhunske materijale, moderne tehnologije i majstorsku
            preciznost kako bismo svakom vozilu vratili njegov sjaj – ili mu
            dali potpuno novi karakter.
          </p>
        </div>

        <div className="intro-visual">
          <img
            className="intro-pattern"
            src={patternImage}
            alt=""
          />

          <div className="intro-image-wrapper">
            <img
              src={introImage}
              alt="Crveni automobil"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;