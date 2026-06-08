import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { TestimonialCard } from "../TestimonialCard/TestimonialCard";
import { testimonials } from "../../../data/content";
import "./Testimonials.css";

export function Testimonials() {
  return (
    <section className="section section--background">
      <div className="container-x">
        <SectionHeader eyebrow="Depoimentos" title="Experiencias" highlight="inesqueciveis" />
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
