import {
  Sparkles, Heart, Paintbrush, HandMetal,
  MapPin, Phone, Mail, Clock, Instagram,
  Hand,
  Star,
} from "lucide-react";

/* Servicos (Services) */
export const services = [
  { icon: Hand, title: "Manicure & Pedicure", description: "Cuidado completo para suas unhas com produtos de qualidade premium e técnicas profissionais" },
  { icon: Paintbrush, title: "Nail Art", description: "Designs exclusivos e personalizados criados especialmente para você" },
  { icon: Star, title: "Alongamento", description: "Alongamento com gel, acrílico e fibra de vidro com acabamento impecável" },
  // { icon: Heart, title: "Spa das Unhas", description: "Tratamento relaxante com hidratacao profunda e massagem terapeutica" },
];

/* Galeria (Gallery) */
export const galleryImages = [
  { url: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", alt: "Nail art elegante" },
  { url: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", alt: "Manicure sofisticada" },
  { url: "https://images.unsplash.com/photo-1599206676335-193c82b13c9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", alt: "Design personalizado" },
  { url: "https://images.unsplash.com/photo-1604654894611-6973b376cbde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", alt: "Unhas decoradas" },
  { url: "https://images.unsplash.com/photo-1588015810531-dd522c9c8bbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", alt: "Nail art exclusiva" },
  { url: "https://images.unsplash.com/photo-1619615787228-ce0fa8440e18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", alt: "Trabalho artistico" },
];

/* =========================================================
   INVESTIMENTO — Tabela de servicos + WhatsApp
   ========================================================= */
export const whatsapp = {
  phone: "5522991016335",
  message: "Olá Bya! Gostaria de um orçamento / agendar um horário.",
};

// Servicos e valores (conforme a plataforma de agendamento).
// Edite nome, duracao (min) e preco aqui quando precisar.
export const serviceMenu = [
  { name: "Manicure", duration: 60, price: "R$ 25,00" },
  { name: "Pedicure", duration: 60, price: "R$ 25,00" },
  { name: "Manicure + Pedicure", duration: 120, price: "R$ 50,00" },
  { name: "Banho de Gel", duration: 150, price: "R$ 95,00" },
  { name: "Aplicação de unha Postiça", duration: 90, price: "R$ 45,00" },
  { name: "Molde F1", duration: 210, price: "R$ 170,00" },
  { name: "Unhas de Fibra", duration: 210, price: "R$ 170,00" },
  { name: "Speed Tip Gel", duration: 210, price: "R$ 170,00" },
];

/* Depoimentos (Testimonials) */
export const testimonials = [
  { name: "Mariana S.", text: "Atendimento impecável e resultado surpreendente. A atenção aos detalhes faz toda a diferença!" },
  { name: "Fernanda L.", text: "Profissionalismo e qualidade excepcional. Cada visita é uma experiência única." },
  { name: "Carolina M.", text: "Design personalizado e acabamento perfeito. Simplesmente o melhor trabalho que já vi!" },
];

/* Contato (Contact) */
export const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    text: "Avenida Venâncio Veloso\nBom Jardim - RJ"
  },
  {
    icon: Phone,
    title: "Telefone / WhatsApp",
    text: "(22) 99101-6335",
    href: "https://wa.me/5522991016335"
  },
  {
    icon: Mail,
    title: "E-mail",
    text: "contato@byamarcondes.com"
  },
  {
    icon: Clock,
    title: "Horário",
    text: "Segunda a Sexta: 9h às 19h\nSábado: 9h às 17h"
  },
  {
    icon: Instagram,
    title: "Instagram",
    text: "@byamarcondesunhas",
    href: "https://www.instagram.com/byamarcondesunhas"
  },
];

/* Navegacao (Header / Footer) */
export const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#investimento", label: "Investimento" },
  { href: "#contato", label: "Contato" },
];
