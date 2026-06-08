import { motion } from "motion/react";
import "./Reveal.css";

/**
 * Wrapper de animacao reutilizavel (substitui os motion.div repetidos).
 * trigger="view" -> anima ao entrar na viewport (padrao das secoes)
 * trigger="load" -> anima no carregamento (usado no Hero)
 */
export function Reveal({
  children,
  x = 0,
  y = 20,
  delay = 0,
  duration = 0.6,
  scale,
  once = true,
  trigger = "view",
  className = "",
}) {
  const initial = { opacity: 0, x, y };
  if (scale !== undefined) initial.scale = scale;

  const target = { opacity: 1, x: 0, y: 0, scale: 1 };
  const animProps =
    trigger === "load"
      ? { animate: target }
      : { whileInView: target, viewport: { once } };

  return (
    <motion.div
      className={`reveal ${className}`.trim()}
      initial={initial}
      transition={{ duration, delay }}
      {...animProps}
    >
      {children}
    </motion.div>
  );
}
