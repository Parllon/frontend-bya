import { Reveal } from "../../ui/Reveal/Reveal";
import { Card } from "../../ui/Card/Card";
import "./ServiceCard.css";

export function ServiceCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <Card className="service-card">
        <div className="service-card__icon-wrap">
          <Icon className="service-card__icon" />
        </div>
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__desc">{description}</p>
      </Card>
    </Reveal>
  );
}
