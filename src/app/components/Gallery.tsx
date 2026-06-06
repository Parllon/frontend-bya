import { motion } from "motion/react";

const images = [
  { url: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", alt: "Nail art elegante" },
  { url: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", alt: "Manicure sofisticada" },
  { url: "https://images.unsplash.com/photo-1599206676335-193c82b13c9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", alt: "Design personalizado" },
  { url: "https://images.unsplash.com/photo-1604654894611-6973b376cbde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", alt: "Unhas decoradas" },
  { url: "https://images.unsplash.com/photo-1588015810531-dd522c9c8bbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", alt: "Nail art exclusiva" },
  { url: "https://images.unsplash.com/photo-1619615787228-ce0fa8440e18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", alt: "Trabalho artístico" }
];

export function Gallery() {
  return (
    <section id="galeria" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="subheading">Portfólio</span>
            <h2 className="heading-section">Trabalhos <span className="font-semibold">exclusivos</span></h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {images.map((image, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="aspect-square overflow-hidden hover:opacity-90 transition-all cursor-pointer group">
              <img src={image.url} alt={image.alt} className="w-full h-full object-cover transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}