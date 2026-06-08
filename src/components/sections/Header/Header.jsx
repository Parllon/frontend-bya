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
          <Logo size="small" />
          <div className="header__brand-text">
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
