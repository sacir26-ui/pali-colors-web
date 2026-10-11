import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./Services.css";

function Services() {
  const serviceNavigation = [
    {
      title: "Lakiranje",
      id: "lakiranje",
      icon: `${process.env.PUBLIC_URL}/assets/images/icon-lakiranje.png`,
    },
    {
      title: "Limarija",
      id: "limarija",
      icon: `${process.env.PUBLIC_URL}/assets/images/icon-limarija.png`,
    },
    {
      title: "Poliranje",
      id: "poliranje",
      icon: `${process.env.PUBLIC_URL}/assets/images/icon-poliranje.png`,
    },
    {
      title: "Spot Repair",
      id: "spot-repair",
      icon: `${process.env.PUBLIC_URL}/assets/images/icon-spot-repair.png`,
    },
  ];

  const services = [
    {
      id: "lakiranje",
      title: "Lakiranje",
      image: `${process.env.PUBLIC_URL}/assets/images/service-detail-lakiranje.webp`,
      description:
        "Kompletno lakiranje vozila uz korištenje vrhunskih materijala i modernih tehnologija za savršen izgled i dugotrajnu zaštitu.",
      features: [
        "Precizno nanošenje boje",
        "Otpornost na vanjske utjecaje",
        "Boja koja traje",
      ],
    },
    {
      id: "limarija",
      title: "Limarija",
      image: `${process.env.PUBLIC_URL}/assets/images/service-detail-limarija.webp`,
      description:
        "Popravak svih vrsta oštećenja na karoseriji uz vraćanje originalnog oblika i čvrstoće vozila.",
      features: [
        "Ispravljanje udubljenja i deformacija",
        "Zamjena i popravak limenih dijelova",
        "Sigurnost i kvaliteta bez kompromisa",
      ],
    },
    {
      id: "poliranje",
      title: "Poliranje",
      image: `${process.env.PUBLIC_URL}/assets/images/service-detail-poliranje.webp`,
      description:
        "Profesionalno poliranje uklanja sitne ogrebotine i vraća duboki sjaj boji. Vaš automobil izgleda kao nov.",
      features: [
        "Jednostupanjsko i višestupanjsko poliranje",
        "Uklanjanje holograma i mikroogrebotina",
        "Zaštita i dugotrajan sjaj",
      ],
    },
    {
      id: "spot-repair",
      title: "Spot Repair",
      image: `${process.env.PUBLIC_URL}/assets/images/service-detail-spot-repair.webp`,
      description:
        "Brzo i učinkovito rješenje za manje ogrebotine i oštećenja na manjoj površini, bez potrebe za kompletnim lakiranjem.",
      features: [
        "Lokalni popravci manjih oštećenja",
        "Brza izvedba i ušteda vremena",
        "Savršen rezultat na malim površinama",
      ],
    },
  ];

  return (
    <main className="services-page">
      <section
        className="services-page-hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/service-lakiranje.webp)`,
        }}
      >
        <div className="services-page-hero-overlay"></div>

        <div className="services-page-hero-content">
          <p>USLUGE</p>

          <h1>
            Preciznost u
            <span> svakom sloju</span>
          </h1>
        </div>
      </section>

      <section className="services-icon-nav">
        <div className="services-icon-nav-inner">
          {serviceNavigation.map((service) => (
            <a
              href={`#${service.id}`}
              className="services-icon-item"
              key={service.id}
            >
              <img src={service.icon} alt="" />

              <span>{service.title}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="services-page-content">
        <div className="services-page-inner">
          {services.map((service, index) => (
            <article
              id={service.id}
                    className={`services-page-item ${
            index % 2 === 0 ? "services-page-item-reverse" : ""
            }`}
              key={service.title}
            >
              <div className="services-page-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="services-page-info">
                <span className="services-page-number">
                  0{index + 1}
                </span>

                <h2>{service.title}</h2>

                <p>{service.description}</p>

                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-page-cta">
        <div className="services-page-cta-content">
          <h2>
            Spremni za
            <span> novi izgled?</span>
          </h2>

          <p>
            Bez obzira na to koju uslugu odaberete, vaše vozilo je u rukama
            stručnjaka koji voli detalje jednako kao i vi.
          </p>

          <Link to="/kontakt" className="services-page-cta-button">
            Zatražite ponudu
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Services;