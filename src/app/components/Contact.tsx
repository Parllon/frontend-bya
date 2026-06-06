import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  return (
    <section id="contato" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="subheading">Contato</span>
            <h2 className="heading-section">Agende sua <span className="font-semibold">visita</span></h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">
            
            {/* Informações de Contato */}
            {[
              { icon: MapPin, title: "Endereço", text: "Rua das Flores, 123 - Centro\nSão Paulo, SP" },
              { icon: Phone, title: "Telefone", text: "(11) 98765-4321" },
              { icon: Mail, title: "E-mail", text: "contato@byamarcondes.com" },
              { icon: Clock, title: "Horário", text: "Segunda a Sexta: 9h às 19h\nSábado: 9h às 17h" },
              { icon: Instagram, title: "Instagram", text: "@byamarcondes" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="card-title !mb-1 text-xs">{item.title}</h3>
                  <p className="text-muted-foreground text-sm whitespace-pre-line">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="card-base">
            <h3 className="card-title text-base mb-8">Agendamento Rápido</h3>

            <form className="space-y-2">
              <div className="form-group">
                <label className="form-label">Nome</label>
                <input type="text" className="form-input" placeholder="Seu nome completo" />
              </div>
              <div className="form-group">
                <label className="form-label">Telefone</label>
                <input type="tel" className="form-input" placeholder="(11) 98765-4321" />
              </div>
              <div className="form-group">
                <label className="form-label">Serviço</label>
                <select className="form-input">
                  <option>Essential</option><option>Premium</option><option>Signature</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Mensagem</label>
                <textarea className="form-input min-h-[80px]" placeholder="Conte suas preferências..." />
              </div>

              <button type="submit" className="btn-primary w-full mt-4">Enviar</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}