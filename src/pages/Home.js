import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import ServicesSection from "../components/ServicesSection";
import StandardSection from "../components/StandardSection";
import TransformationSection from "../components/TransformationSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <ServicesSection />
      <StandardSection />
      <TransformationSection />
      <Footer />
    </main>
  );
}

export default Home;