import { motion } from "motion/react";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 bg-gradient-hero" />

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-12 flex justify-center">
            <Logo size="large" />
          </div>

          <h1 className="heading-display mb-6">
            Beleza e sofisticação<br />
            <span className="font-semibold">em cada detalhe</span>
          </h1>

          <p className="text-body mb-10 max-w-2xl mx-auto">
            Nail art exclusiva e personalizada com técnicas avançadas e produtos premium
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button className="btn-primary">Agendar Horário</button>
            <button className="btn-outline">Ver Portfólio</button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="w-0.5 h-12 bg-primary" />
        </motion.div>
      </div>
    </section>
  );
}