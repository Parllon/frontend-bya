import { Reveal } from "../../ui/Reveal/Reveal";
import { Card } from "../../ui/Card/Card";
import { Button } from "../../ui/Button/Button";
import "./PricingCard.css";

export function PricingCard({
  name,
  price,
  features,
  popular = false,
  delay = 0,
}) {
  return (
    <Reveal delay={delay}>
      <Card highlighted={popular} className="pricing-card">
        {popular && <span className="pricing-card__badge">Popular</span>}

        <div className="pricing-card__head">
          <h3 className="pricing-card__name">{name}</h3>
          <div className="pricing-card__price">{price}</div>
          <p className="pricing-card__period">por sessao</p>
        </div>

        <ul className="pricing-card__features">
          {features.map((feature) => (
            <li key={feature} className="pricing-card__feature">
              <span className="pricing-card__dot" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          href="https://agendamento.deadzone.com.br"
          variant={popular ? "primary" : "outline"}
          block
          className="pricing-card__btn"
        >
          Agendar
        </Button>
      </Card>
    </Reveal>
  );
}
