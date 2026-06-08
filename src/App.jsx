import { Header } from "./components/sections/Header/Header";
import { Hero } from "./components/sections/Hero/Hero";
import { Services } from "./components/sections/Services/Services";
import { Gallery } from "./components/sections/Gallery/Gallery";
import { Pricing } from "./components/sections/Pricing/Pricing";
import { Testimonials } from "./components/sections/Testimonials/Testimonials";
import { Contact } from "./components/sections/Contact/Contact";
import { Footer } from "./components/sections/Footer/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
