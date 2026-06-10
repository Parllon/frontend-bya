import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "./Lightbox.css";

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 320 : -320, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -320 : 320, opacity: 0 }),
};

const SWIPE_THRESHOLD = 60; // distancia/forca minima do gesto para trocar a foto

export function Lightbox({ images, startIndex = 0, onClose }) {
  // [indice atual, direcao do movimento] — direcao alimenta a animacao de slide
  const [[index, direction], setState] = useState([startIndex, 0]);

  const paginate = useCallback(
    (dir) => {
      setState(([i]) => [(i + dir + images.length) % images.length, dir]);
    },
    [images.length]
  );

  // Teclado: setas navegam, Esc fecha
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") paginate(1);
      else if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, paginate]);

  // Trava o scroll do fundo enquanto aberto
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  const current = images[index];

  return createPortal(
    <motion.div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Galeria de fotos"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button className="lightbox__close" aria-label="Fechar" onClick={onClose}>
        <X size={28} />
      </button>

      <button
        className="lightbox__nav lightbox__nav--prev"
        aria-label="Foto anterior"
        onClick={(e) => { e.stopPropagation(); paginate(-1); }}
      >
        <ChevronLeft size={32} />
      </button>

      <div className="lightbox__stage" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={index}
            src={current.url}
            alt={current.alt}
            className="lightbox__img"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={(e, { offset, velocity }) => {
              const power = offset.x + velocity.x * 0.3;
              if (power < -SWIPE_THRESHOLD) paginate(1);
              else if (power > SWIPE_THRESHOLD) paginate(-1);
            }}
          />
        </AnimatePresence>
      </div>

      <button
        className="lightbox__nav lightbox__nav--next"
        aria-label="Próxima foto"
        onClick={(e) => { e.stopPropagation(); paginate(1); }}
      >
        <ChevronRight size={32} />
      </button>

      <div className="lightbox__counter">{index + 1} / {images.length}</div>
    </motion.div>,
    document.body
  );
}
