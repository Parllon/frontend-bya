import { Reveal } from "../../ui/Reveal/Reveal";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { ContactInfoItem } from "../../ui/ContactInfoItem/ContactInfoItem";
import { Button } from "../../ui/Button/Button";
import { contactInfo } from "../../../data/content";
import "./Contact.css";

export function Contact() {
  return (
    <section id="contato" className="section section--secondary">
      <div className="container-x">
        <SectionHeader eyebrow="Contato" title="Agende sua" highlight="visita" />

        <div className="contact__grid">
          <Reveal x={-20} y={0} className="contact__info">
            {contactInfo.map((item) => (
              <ContactInfoItem key={item.title} {...item} />
            ))}
          </Reveal>

          <Reveal x={20} y={0}>
            <div className="card contact__form-card flex flex-col justify-center text-center h-full">
              <h3 className="contact__form-title mb-4">Sistema de Agendamento</h3>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                Utilize a nossa plataforma dedicada para visualizar os horários livres em tempo real, escolher os serviços e confirmar a sua marcação automaticamente.
              </p>
              <Button href="https://agendamento.deadzone.com.br" block className="contact__submit">
                Acessar Agenda
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}