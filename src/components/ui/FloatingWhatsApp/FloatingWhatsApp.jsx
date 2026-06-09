import { MessageCircle } from "lucide-react";
import "./FloatingWhatsApp.css";

export function FloatingWhatsApp() {
  const phone = "5522991016335";
  // Mensagem customizada pré-definida codificada para URL
  const message = encodeURIComponent("Olá Bya! Gostaria de agendar um horário.");
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-wpp"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="floating-wpp__icon" />
      <span className="floating-wpp__tooltip">Agendar no WhatsApp</span>
    </a>
  );
}