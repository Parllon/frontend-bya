import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo size="small" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-foreground tracking-wide">BYA MARCONDES</span>
            <span className="text-xs text-primary tracking-widest">NAIL DESIGNER</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#servicos" className="hover:text-primary transition-colors uppercase tracking-wider">Serviços</a>
          <a href="#galeria" className="hover:text-primary transition-colors uppercase tracking-wider">Galeria</a>
          <a href="#precos" className="hover:text-primary transition-colors uppercase tracking-wider">Preços</a>
          <a href="#contato" className="hover:text-primary transition-colors uppercase tracking-wider">Contato</a>
        </nav>

        <button className="btn-primary !px-6 !py-2.5">Agendar</button>
      </div>
    </header>
  );
}