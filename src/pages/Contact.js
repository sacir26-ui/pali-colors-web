import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import Footer from "../components/Footer";
import "./Contact.css";

function Contact() {
  const heroImage = `${process.env.PUBLIC_URL}/assets/images/contact-hero.webp`;
  const contactImage = `${process.env.PUBLIC_URL}/assets/images/contact-cars.webp`;
  const patternImage = `${process.env.PUBLIC_URL}/assets/images/intro-pattern.png`;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="contact-page">
      {/* HERO */}
      <section
        className="contact-hero"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <p>KONTAKT</p>

          <h1>Kontaktiraj nas</h1>
        </div>
      </section>

      {/* FORMA */}
      <section className="contact-form-section">
        <div className="contact-form-inner">
          <h2>Kontaktiraj nas</h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row contact-form-row-two">
              <div className="contact-field">
                <label htmlFor="name">Ime</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="..."
                />
              </div>

              <div className="contact-field">
                <label htmlFor="surname">Prezime</label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  placeholder="..."
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="phone">Telefonski broj</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="..."
              />
            </div>

            <div className="contact-field">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="..."
              />
            </div>

            <div className="contact-field">
              <label htmlFor="service">Odaberite uslugu</label>

              <select
                id="service"
                name="service"
                defaultValue="lakiranje"
              >
                <option value="lakiranje">Auto lakiranje</option>
                <option value="limarija">Limarija</option>
                <option value="poliranje">Poliranje</option>
                <option value="spot-repair">Spot Repair</option>
              </select>
            </div>

            <div className="contact-field">
              <label>Željeno vrijeme za termin</label>

              <div className="contact-form-row contact-form-row-two">
                <input
                  type="date"
                  id="date"
                  name="date"
                  aria-label="Datum"
                />

                <input
                  type="time"
                  id="time"
                  name="time"
                  aria-label="Vrijeme"
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="message">Poruka</label>

              <textarea
                id="message"
                name="message"
                placeholder="..."
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Pošalji
            </button>
          </form>
        </div>
      </section>

      {/* JAVITE NAM SE */}
      <section className="contact-info-section">
        <div className="contact-info-inner">
          <div className="contact-info-image">
            <img
              className="contact-pattern"
              src={patternImage}
              alt=""
            />

            <img
              className="contact-cars-image"
              src={contactImage}
              alt="Pali Colors automobili"
            />
          </div>

          <div className="contact-info-content">
            <h2>Javite nam se</h2>

            <a
              href="tel:+385912196382"
              className="contact-info-item"
            >
              <FontAwesomeIcon icon={faPhone} />

              <span>+385 91 219 6382</span>
            </a>

            <a
              href="mailto:pali.colors@gmail.com"
              className="contact-info-item"
            >
              <FontAwesomeIcon icon={faEnvelope} />

              <span>pali.colors@gmail.com</span>
            </a>

            <p className="contact-info-location">
              Prilaz Vladislava Brajkovića 5
              <br />
              Zagreb
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Contact;