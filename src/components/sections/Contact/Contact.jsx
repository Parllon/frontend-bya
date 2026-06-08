import { Reveal } from "../../ui/Reveal/Reveal";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { ContactInfoItem } from "../../ui/ContactInfoItem/ContactInfoItem";
import { FormField } from "../../ui/FormField/FormField";
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
            <div className="card contact__form-card">
              <h3 className="contact__form-title">Agendamento Rapido</h3>
              <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
                <FormField label="Nome" type="text" placeholder="Seu nome completo" />
                <FormField label="Telefone" type="tel" placeholder="(11) 98765-4321" />
                <FormField label="Servico" as="select" options={["Essential", "Premium", "Signature"]} />
                <FormField label="Mensagem" as="textarea" placeholder="Conte suas preferencias..." />
                <Button type="submit" block className="contact__submit">Enviar</Button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
