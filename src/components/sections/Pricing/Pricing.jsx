import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { PricingCard } from "../PricingCard/PricingCard";
import { plans } from "../../../data/content";
import "./Pricing.css";

export function Pricing() {
  return (
    <section id="precos" className="section section--secondary">
      <div className="container-x">
        <SectionHeader eyebrow="Investimento" title="Pacotes" highlight="exclusivos" />
        <div className="pricing__grid">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} {...plan} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
