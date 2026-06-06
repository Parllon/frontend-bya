import { Sparkles, Heart, Paintbrush, HandMetal } from "lucide-react";
import { motion } from "motion/react";

const services = [
  { icon: HandMetal, title: "Manicure & Pedicure", description: "Cuidado completo para suas unhas com produtos de qualidade premium e técnicas profissionais" },
  { icon: Paintbrush, title: "Nail Art", description: "Designs exclusivos e personalizados criados especialmente para você" },
  { icon: Sparkles, title: "Alongamento", description: "Alongamento com gel, acrílico e fibra de vidro com acabamento impecável" },
  { icon: Heart, title: "Spa das Unhas", description: "Tratamento relaxante com hidratação profunda e massagem terapêutica" }
];

export function Services() {
  return (
    <section id="servicos" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="subheading">Serviços</span>
            <h2 className="heading-section">Excelência em <span className="font-semibold">cada detalhe</span></h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} 
              className="card-base">
              <div className="card-icon-wrap">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="card-title">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}