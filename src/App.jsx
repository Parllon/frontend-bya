import { Header } from "./components/sections/Header/Header";
import { Hero } from "./components/sections/Hero/Hero";
import { Services } from "./components/sections/Services/Services";
import { Gallery } from "./components/sections/Gallery/Gallery";
import { Investment } from "./components/sections/Investment/Investment";
import { Testimonials } from "./components/sections/Testimonials/Testimonials";
import { Contact } from "./components/sections/Contact/Contact";
import { Footer } from "./components/sections/Footer/Footer";
import { FloatingWhatsApp } from "./components/ui/FloatingWhatsApp/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Investment />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
