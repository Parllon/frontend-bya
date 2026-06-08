import { Reveal } from "../../ui/Reveal/Reveal";
import { Card } from "../../ui/Card/Card";
import "./TestimonialCard.css";

export function TestimonialCard({ name, text, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <Card className="testimonial-card">
        <div className="testimonial-card__rule" />
        <p className="testimonial-card__text">"{text}"</p>
        <p className="testimonial-card__name">{name}</p>
      </Card>
    </Reveal>
  );
}
