import { Reveal } from "../Reveal/Reveal";
import "./SectionHeader.css";

export function SectionHeader({ eyebrow, title, highlight }) {
  return (
    <Reveal className="section-header">
      {eyebrow && <span className="section-header__eyebrow">{eyebrow}</span>}
      <h2 className="section-header__title">
        {title} {highlight && <strong>{highlight}</strong>}
      </h2>
    </Reveal>
  );
}
