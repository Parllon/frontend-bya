import { motion } from "motion/react";

const testimonials = [
  { name: "Mariana S.", text: "Atendimento impecável e resultado surpreendente. A atenção aos detalhes faz toda a diferença!" },
  { name: "Fernanda L.", text: "Profissionalismo e qualidade excepcional. Cada visita é uma experiência única." },
  { name: "Carolina M.", text: "Design personalizado e acabamento perfeito. Simplesmente o melhor trabalho que já vi!" }
];

export function Testimonials() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="subheading">Depoimentos</span>
            <h2 className="heading-section">Experiências <span className="font-semibold">inesquecíveis</span></h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="card-base !border-border">
              <div className="w-12 h-0.5 mb-6 bg-primary" />
              <p className="text-body mb-8 italic">"{testimonial.text}"</p>
              <p className="card-title !mb-0 text-primary">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}