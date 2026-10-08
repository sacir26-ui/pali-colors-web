import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  const logoPath = `${process.env.PUBLIC_URL}/assets/images/pali-colors-logo-navbar.png`;

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logoPath} alt="Pali Colors" />
          </Link>
        </div>

        <div className="footer-column">
          <h3>Kontakt</h3>

       <div className="footer-contact-item">
  <FontAwesomeIcon icon={faLocationDot} />
  <p>
    Prilaz Vladislava
    <br />
    Brajkovića 5 Zagreb, Hrvatska
                </p>
                </div>

                <a href="tel:+385912196382" className="footer-contact-item">
                <FontAwesomeIcon icon={faPhone} />
                <span>+385 91 219 6382</span>
                </a>

                <a
                href="mailto:pali.colors@gmail.com"
                className="footer-contact-item"
                >
                <FontAwesomeIcon icon={faEnvelope} />
                <span>pali.colors@gmail.com</span>
                </a>

                <a
                href="https://wa.me/385912196382"
                target="_blank"
                rel="noreferrer"
                className="footer-contact-item"
                >
                <FontAwesomeIcon icon={faWhatsapp} />
                <span>WhatsApp</span>
                </a>
        </div>

        <div className="footer-column">
          <h3>Navigacija</h3>

          <Link to="/">Naslovna</Link>
          <Link to="/o-nama">O nama</Link>
          <Link to="/usluge">Usluge</Link>
          <Link to="/projekti">Projekti</Link>
          <Link to="/kontakt">Kontakt</Link>
        </div>

     <div className="footer-column footer-location">
  <h3>Lokacija</h3>

  <div className="footer-location-card">
    <FontAwesomeIcon
      icon={faLocationDot}
      className="footer-location-icon"
    />

    <div>
      <strong>Pali Colors</strong>

      <p>
        Prilaz Vladislava
        <br />
        Brajkovića 5 Zagreb, Hrvatska
      </p>
    </div>

    <a
      href="https://www.google.com/maps/search/?api=1&query=Prilaz+Vladislava+Brajkovića+5"
      target="_blank"
      rel="noreferrer"
      className="footer-map-link"
    >
      Otvori u Google Maps
    </a>
  </div>
</div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © {new Date().getFullYear()} Pali Colors. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;