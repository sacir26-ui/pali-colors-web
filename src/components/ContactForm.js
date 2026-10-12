import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [selectedService, setSelectedService] = useState("lakiranje");

  const services = [
    {
      value: "lakiranje",
      label: "Lakiranje",
    },
    {
      value: "limarija",
      label: "Limarija",
    },
    {
      value: "poliranje",
      label: "Poliranje",
    },
    {
      value: "spot-repair",
      label: "Spot Repair",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="premium-contact-form" onSubmit={handleSubmit}>
      <div className="premium-form-heading">
        <p>VAŠ UPIT</p>
        <h3>Podaci za procjenu</h3>

        <span>
          Ispunite osnovne podatke i ukratko opišite što je potrebno napraviti
          na vozilu.
        </span>
      </div>

      <div className="premium-form-grid">
        <div className="premium-field">
          <label htmlFor="name">Ime</label>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Vaše ime"
            required
          />
        </div>

        <div className="premium-field">
          <label htmlFor="surname">Prezime</label>

          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="Vaše prezime"
            required
          />
        </div>

        <div className="premium-field">
          <label htmlFor="phone">Telefonski broj</label>

          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+385 ..."
            required
          />
        </div>

        <div className="premium-field">
          <label htmlFor="email">E-mail</label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="ime@email.com"
            required
          />
        </div>
      </div>

      <div className="premium-service-field">
        <label>Odaberite uslugu</label>

        <div className="premium-service-options">
          {services.map((service) => (
            <button
              type="button"
              key={service.value}
              className={`premium-service-option ${
                selectedService === service.value ? "active" : ""
              }`}
              onClick={() => setSelectedService(service.value)}
            >
              {service.label}
            </button>
          ))}
        </div>

        <input
          type="hidden"
          name="service"
          value={selectedService}
        />
      </div>

      <div className="premium-form-grid premium-form-date-grid">
        <div className="premium-field">
          <label htmlFor="date">Željeni datum</label>

          <input
            type="date"
            id="date"
            name="date"
          />
        </div>

        <div className="premium-field">
          <label htmlFor="time">Željeno vrijeme</label>

          <input
            type="time"
            id="time"
            name="time"
          />
        </div>
      </div>

      <div className="premium-field premium-message">
        <label htmlFor="message">Opišite što je potrebno</label>

        <textarea
          id="message"
          name="message"
          placeholder="Oštećenje, dio vozila, željena usluga, dodatne informacije..."
          required
        ></textarea>
      </div>

      <div className="premium-form-bottom">
        <p>
          Nakon slanja upita javit ćemo vam se radi dogovora i dodatnih
          informacija.
        </p>

        <button type="submit" className="premium-submit">
          Pošalji upit
          <span>→</span>
        </button>
      </div>
    </form>
  );
}

export default ContactForm;