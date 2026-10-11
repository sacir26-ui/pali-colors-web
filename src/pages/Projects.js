import Footer from "../components/Footer";
import "./Projects.css";

function Projects() {
  const heroImage = `${process.env.PUBLIC_URL}/assets/images/projects-hero.webp`;

  const projects = [
    {
      title: "Neki auto",
      type: "Full repaint",
      image: `${process.env.PUBLIC_URL}/assets/images/project-1.webp`,
    },
    {
      title: "Neki auto",
      type: "Color change",
      image: `${process.env.PUBLIC_URL}/assets/images/project-2.webp`,
    },
    {
      title: "Neki auto",
      type: "Full repaint",
      image: `${process.env.PUBLIC_URL}/assets/images/project-3.webp`,
    },
    {
      title: "Neki auto",
      type: "Full detail & polish",
      image: `${process.env.PUBLIC_URL}/assets/images/project-4.webp`,
    },
    {
      title: "Neki auto",
      type: "Spot repair",
      image: `${process.env.PUBLIC_URL}/assets/images/project-5.webp`,
    },
    {
      title: "Neki auto",
      type: "Full repaint & detail",
      image: `${process.env.PUBLIC_URL}/assets/images/project-6.webp`,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="projects-page">
      {/* HERO */}
      <section
        className="projects-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="projects-hero-overlay"></div>

        <div className="projects-hero-content">
          <p>PROJEKTI</p>
          <h1>Rezultati govore za sebe</h1>
        </div>
      </section>

      {/* UVOD */}
      <section className="projects-intro">
        <div className="projects-intro-inner">
          <p>
            Svaki automobil koji dođe u Pali Colors ima svoju priču, svoje
            zahtjeve i svoj cilj.
          </p>

          <p>
            Od obnove i sanacije oštećenja do kompletnog lakiranja i
            personalizacije, ovdje predstavljamo projekte koji najbolje
            pokazuju naš pristup, preciznost i kvalitetu završnog rezultata.
          </p>
        </div>
      </section>

      {/* GRID PROJEKATA */}
      <section className="projects-gallery">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>
              <img src={project.image} alt={project.title} />

              <div className="project-card-shade"></div>

              <div className="project-card-content">
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.type}</p>
                </div>

                <span className="project-arrow">→</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* KONTAKT BLOK KAO U CANVI */}
      <section className="projects-contact">
        <div className="projects-contact-inner">
          <h2>Kontaktiraj nas</h2>

          <form className="projects-contact-form" onSubmit={handleSubmit}>
            <div className="projects-form-row">
              <div className="projects-form-field">
                <label htmlFor="project-name">Ime</label>
                <input id="project-name" type="text" />
              </div>

              <div className="projects-form-field">
                <label htmlFor="project-surname">Prezime</label>
                <input id="project-surname" type="text" />
              </div>

              <div className="projects-form-field">
                <label htmlFor="project-service">Odaberite uslugu</label>

                <select id="project-service" defaultValue="lakiranje">
                  <option value="lakiranje">Auto lakiranje</option>
                  <option value="limarija">Limarija</option>
                  <option value="poliranje">Poliranje</option>
                  <option value="spot-repair">Spot Repair</option>
                </select>
              </div>
            </div>

            <div className="projects-form-row projects-form-row-bottom">
              <div className="projects-form-field">
                <label htmlFor="project-phone">Telefonski broj</label>
                <input id="project-phone" type="tel" />
              </div>

              <div className="projects-form-field">
                <label htmlFor="project-email">E-mail</label>
                <input id="project-email" type="email" />
              </div>

              <div className="projects-form-field projects-message-field">
                <label htmlFor="project-message">Poruka</label>
                <textarea id="project-message"></textarea>
              </div>
            </div>

            <button type="submit" className="projects-submit">
              Pošalji
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Projects;