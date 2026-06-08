import { motion } from "motion/react";
import { Logo } from "./Logo";

export function Hero() {
  return (
    // Usamos min-h-[70vh] para garantir que o fundo apareça, 
    // mas sem ocupar a tela inteira (o que dá o espaço livre embaixo)
    <section className="relative min-h-[30vh] flex items-start pt-30 px-4 overflow-hidden">
      
      {/* O fundo continua ocupando o espaço necessário */}
      <div className="absolute inset-0 z-0 bg-gradient-hero" />

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex justify-center">
            <Logo size="large" />
          </div>

          <h1 className="heading-display mb-4">
            Beleza e sofisticação<br />
            <span className="font-semibold">em cada detalhe</span>
          </h1>

          <p className="text-body mb-8 max-w-2xl mx-auto">
            Nail art exclusiva e personalizada com técnicas avançadas e produtos premium
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button className="btn-primary">Agendar Horário</button>
            <button className="btn-outline">Ver Portfólio</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}