import { Reveal } from "../../ui/Reveal/Reveal";
import { Logo } from "../../ui/Logo/Logo";
import { Button } from "../../ui/Button/Button";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="container-x hero__content">
        <Reveal trigger="load" duration={0.8}>
          <div className="hero__logo">
            <Logo size="xl" />
          </div>

          <h1 className="hero__title">
            Beleza e sofisticacao
            <br />
            <strong>em cada detalhe</strong>
          </h1>

          <p className="hero__subtitle">
            Nail art exclusiva e personalizada com tecnicas avancadas e produtos premium
          </p>

          <div className="hero__actions">
            <Button href="https://agendamento.deadzone.com.br">
              Agendar Horario
            </Button>
            <Button href="#galeria" variant="outline">
              Ver Portfolio
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
