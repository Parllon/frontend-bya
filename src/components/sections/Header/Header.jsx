import { Logo } from "../../ui/Logo/Logo";
import { NavLink } from "../../ui/NavLink/NavLink";
import { Button } from "../../ui/Button/Button";
import { navLinks } from "../../../data/content";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="container-x header__inner">
        <div className="header__brand">
          {/* Aplicamos a escala de 1.4 (aumenta 40%) a partir do lado esquerdo */}
          <div className="scale-[1.4] origin-left">
            <Logo size="defalut" />
          </div>
          
          {/* Adicionamos ml-3 (margin) para afastar o texto da logo que agora está maior */}
          <div className="header__brand-text ml-3">
            <span className="header__name">BYA MARCONDES</span>
            <span className="header__role">NAIL DESIGNER</span>
          </div>
        </div>

        <nav className="header__nav">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
          ))}
        </nav>

        <Button className="header__cta">Agendar</Button>
      </div>
    </header>
  );
}
