import { MessageCircle } from "lucide-react";
import { Reveal } from "../../ui/Reveal/Reveal";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { Button } from "../../ui/Button/Button";
import { serviceMenu, whatsapp } from "../../../data/content";
import "./Investment.css";

function formatDuration(min) {
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h}h${String(m).padStart(2, "0")}` : `${h}h`;
}

export function Investment() {
  const url = `https://wa.me/${whatsapp.phone}?text=${encodeURIComponent(whatsapp.message)}`;

  return (
    <section id="investimento" className="section section--secondary">
      <div className="container-x">
        <SectionHeader eyebrow="Investimento" title="Serviços e" highlight="valores" />

        <Reveal className="investment">
          <ul className="investment__list">
            {serviceMenu.map((item) => (
              <li key={item.name} className="investment__row">
                <span className="investment__info">
                  <span className="investment__name">{item.name}</span>
                  <span className="investment__duration">{formatDuration(item.duration)}</span>
                </span>
                <span className="investment__price">{item.price}</span>
              </li>
            ))}
          </ul>

          <p className="investment__note">
            Nail art personalizada e designs exclusivos têm valor sob consulta.
            Fale comigo no WhatsApp para um orçamento sem compromisso.
          </p>

          <Button href={url} className="investment__cta">
            <MessageCircle className="investment__cta-icon" />
            Falar no WhatsApp
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
