import { motion } from "motion/react";

const plans = [
  { name: "Essential", price: "R$ 80", features: ["Manicure profissional", "Esmaltação em gel", "Cutilagem e design", "Hidratação das mãos"] },
  { name: "Premium", price: "R$ 150", popular: true, features: ["Manicure completa", "Nail art personalizada", "Esmaltação premium", "Tratamento SPA", "Massagem relaxante"] },
  { name: "Signature", price: "R$ 250", features: ["Experiência exclusiva", "Nail art elaborada", "Alongamento premium", "SPA completo", "Design personalizado", "Produtos de luxo"] }
];

export function Pricing() {
  return (
    <section id="precos" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="subheading">Investimento</span>
            <h2 className="heading-section">Pacotes <span className="font-semibold">exclusivos</span></h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`card-base relative ${plan.popular ? 'border-primary border-2 shadow-xl' : ''}`}>
              
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em]">
                  Popular
                </div>
              )}

              <div className="text-center mb-10">
                <h3 className="card-title text-base">{plan.name}</h3>
                <div className="text-5xl font-light text-foreground mb-2">{plan.price}</div>
                <p className="text-muted-foreground text-sm">por sessão</p>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 mt-2 flex-shrink-0 bg-primary rounded-full" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={plan.popular ? 'btn-primary w-full !py-3.5' : 'btn-outline w-full !py-3.5'}>
                Agendar
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}