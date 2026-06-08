import {
  Sparkles, Heart, Paintbrush, HandMetal,
  MapPin, Phone, Mail, Clock, Instagram,
} from "lucide-react";

/* Servicos (Services) */
export const services = [
  { icon: HandMetal, title: "Manicure & Pedicure", description: "Cuidado completo para suas unhas com produtos de qualidade premium e tecnicas profissionais" },
  { icon: Paintbrush, title: "Nail Art", description: "Designs exclusivos e personalizados criados especialmente para voce" },
  { icon: Sparkles, title: "Alongamento", description: "Alongamento com gel, acrilico e fibra de vidro com acabamento impecavel" },
  { icon: Heart, title: "Spa das Unhas", description: "Tratamento relaxante com hidratacao profunda e massagem terapeutica" },
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

/* Precos (Pricing) */
export const plans = [
  { name: "Essential", price: "R$ 80", features: ["Manicure profissional", "Esmaltacao em gel", "Cutilagem e design", "Hidratacao das maos"] },
  { name: "Premium", price: "R$ 150", popular: true, features: ["Manicure completa", "Nail art personalizada", "Esmaltacao premium", "Tratamento SPA", "Massagem relaxante"] },
  { name: "Signature", price: "R$ 250", features: ["Experiencia exclusiva", "Nail art elaborada", "Alongamento premium", "SPA completo", "Design personalizado", "Produtos de luxo"] },
];

/* Depoimentos (Testimonials) */
export const testimonials = [
  { name: "Mariana S.", text: "Atendimento impecavel e resultado surpreendente. A atencao aos detalhes faz toda a diferenca!" },
  { name: "Fernanda L.", text: "Profissionalismo e qualidade excepcional. Cada visita e uma experiencia unica." },
  { name: "Carolina M.", text: "Design personalizado e acabamento perfeito. Simplesmente o melhor trabalho que ja vi!" },
];

/* Contato (Contact) */
export const contactInfo = [
  { icon: MapPin, title: "Endereco", text: "Rua das Flores, 123 - Centro\nSao Paulo, SP" },
  { icon: Phone, title: "Telefone", text: "(11) 98765-4321" },
  { icon: Mail, title: "E-mail", text: "contato@byamarcondes.com" },
  { icon: Clock, title: "Horario", text: "Segunda a Sexta: 9h as 19h\nSabado: 9h as 17h" },
  { icon: Instagram, title: "Instagram", text: "@byamarcondes" },
];

/* Navegacao (Header / Footer) */
export const navLinks = [
  { href: "#servicos", label: "Servicos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#precos", label: "Precos" },
  { href: "#contato", label: "Contato" },
];
