import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { ServiceCard } from "../ServiceCard/ServiceCard";
import { services } from "../../../data/content";
import "./Services.css";

export function Services() {
  return (
    <section id="servicos" className="section section--secondary">
      <div className="container-x">
        <SectionHeader eyebrow="Servicos" title="Excelencia em" highlight="cada detalhe" />
        <div className="services__grid">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
