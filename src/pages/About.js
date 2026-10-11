import Footer from "../components/Footer";
import "./About.css";

function About() {
  const heroImage = `${process.env.PUBLIC_URL}/assets/images/about-hero.webp`;
  const workImage = `${process.env.PUBLIC_URL}/assets/images/about-work.webp`;
  const patternImage = `${process.env.PUBLIC_URL}/assets/images/intro-pattern.png`;

  return (
    <main className="about-page">
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <p className="about-hero-eyebrow">O NAMA</p>

          <h1>
            Detalji su ono po{" "}
            <span className="about-cemu">
              <span className="about-c-caron">c</span>emu
            </span>{" "}
            se <span className="about-brand">razlikujemo.</span>
          </h1>
        </div>
      </section>

      <section className="about-intro">
        <div className="about-intro-inner">
          <p>
            Pali Colors je moderna autolakirnica iz Zagreba, nastala iz ljubavi
            prema automobilima i želje da svaki detalj bude izveden na najvišoj
            razini.
          </p>

          <p>
            Spajamo moderne tehnologije, kvalitetne materijale i precizan rad
            kako bismo svakom automobilu vratili njegov sjaj ili mu dali
            potpuno novi karakter.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values-inner">
          <div className="about-values-content">
            <div className="about-value-block">
              <h2>Pristup</h2>

              <p>
                Svakom automobilu pristupamo individualno. Od pripreme površine
                do finalnog sloja, svaki korak izvodimo s jednakom pažnjom i
                jasnim ciljem – vrhunskim rezultatom.
              </p>
            </div>

            <div className="about-value-block">
              <h2>Vizija</h2>

              <p>
                Naš je cilj biti sinonim za kvalitetu, preciznost i povjerenje.
                Želimo da svaki automobil koji izađe iz naše radionice bude
                najbolji dokaz našeg rada.
              </p>
            </div>
          </div>

          <div className="about-values-image">
            <img
              className="about-pattern"
              src={patternImage}
              alt=""
            />

            <img
              className="about-work-image"
              src={workImage}
              alt="Pali Colors rad u lakirnici"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default About;