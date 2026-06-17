import { Instagram, Facebook } from "lucide-react";
import { Logo } from "../../ui/Logo/Logo";
import { SocialLink } from "../../ui/SocialLink/SocialLink";
import { navLinks } from "../../../data/content";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-x">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              <Logo size="small" light />
              <div className="footer__brand-text">
                <span className="footer__name">BYA MARCONDES</span>
                <span className="footer__role">NAIL DESIGNER</span>
              </div>
            </div>
            <p className="footer__tagline">
              Excelência e sofisticação em cada detalhe do seu nail design.
            </p>
          </div>

          <div>
            <h4 className="footer__heading">Navegação</h4>
            <ul className="footer__links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__heading">Social</h4>
            <div className="footer__social">
              <SocialLink
                label="Instagram"
                icon={Instagram}
                href="https://www.instagram.com/byamarcondesunhas"
              />
              <SocialLink label="Facebook" icon={Facebook} />
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2026 parllondev.net - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
