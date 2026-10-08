import "./ServicesSection.css";

function ServicesSection() {
  const services = [
    {
      title: "Lakiranje",
      image: `${process.env.PUBLIC_URL}/assets/images/service-lakiranje.webp`,
    },
    {
      title: "Limarija",
      image: `${process.env.PUBLIC_URL}/assets/images/service-limarija.webp`,
    },
    {
      title: "Poliranje",
      image: `${process.env.PUBLIC_URL}/assets/images/service-poliranje.webp`,
    },
    {
      title: "Spot Repair",
      image: `${process.env.PUBLIC_URL}/assets/images/service-spot-repair.webp`,
    },
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">
            Na<span className="services-s-caron">s</span>e usluge
            </h2>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />

            <div className="service-overlay"></div>

            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;