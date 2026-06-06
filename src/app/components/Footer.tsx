import { Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="py-16 px-4 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size="small" light={true} />
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-wide">BYA MARCONDES</span>
                <span className="text-xs text-primary tracking-widest">NAIL DESIGNER</span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Excelência e sofisticação em cada detalhe do seu nail design.
            </p>
          </div>

          <div>
            <h4 className="card-title text-background text-xs">Navegação</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#galeria" className="hover:text-primary transition-colors">Portfólio</a></li>
              <li><a href="#precos" className="hover:text-primary transition-colors">Investimento</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="card-title text-background text-xs">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-foreground transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-foreground transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20 text-center text-sm text-background/50">
          <p>© 2026 Bya Marcondes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}