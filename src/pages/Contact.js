import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import "./Contact.css";

function Contact() {
  const heroImage = `${process.env.PUBLIC_URL}/assets/images/contact-hero.webp`;

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

      {/* GLAVNI KONTAKT BLOK */}
      <section className="contact-main">
        <div className="contact-main-inner">
          {/* LIJEVA STRANA */}
          <div className="contact-sidebar">
            <div className="contact-sidebar-top">
              <p className="contact-sidebar-eyebrow">
                PALI COLORS
              </p>

              <h2>Dogovorite procjenu</h2>

              <p className="contact-sidebar-text">
                Imate oštećenje koje želite sanirati, planirate lakiranje ili
                svom automobilu želite dati potpuno novi izgled?
              </p>

              <p className="contact-sidebar-text">
                Pošaljite nam osnovne informacije, a mi ćemo vam se javiti radi
                dogovora i procjene.
              </p>
            </div>

            <div className="contact-sidebar-details">
              <a
                href="tel:+385912196382"
                className="contact-detail"
              >
                <span className="contact-detail-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </span>

                <div>
                  <small>Telefon</small>
                  <strong>+385 91 219 6382</strong>
                </div>
              </a>

              <a
                href="mailto:pali.colors@gmail.com"
                className="contact-detail"
              >
                <span className="contact-detail-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>

                <div>
                  <small>E-mail</small>
                  <strong>pali.colors@gmail.com</strong>
                </div>
              </a>

              <a
                href="https://wa.me/385912196382"
                target="_blank"
                rel="noreferrer"
                className="contact-detail"
              >
                <span className="contact-detail-icon">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </span>

                <div>
                  <small>WhatsApp</small>
                  <strong>Pošaljite poruku</strong>
                </div>
              </a>

              <div className="contact-detail">
                <span className="contact-detail-icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>

                <div>
                  <small>Lokacija</small>

                  <strong>
                    Velikopoljska ul. 15, 10000 Veliko Polje, Zagreb
                    <br />
                    Hrvatska
                  </strong>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Velikopoljska+ul.+15+10000+Veliko+Polje+Zagreb"
              target="_blank"
              rel="noreferrer"
              className="contact-map-link"
            >
              Otvori lokaciju

              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
              />
            </a>
          </div>

          {/* DESNA STRANA */}
          <div className="contact-form-card">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Contact;