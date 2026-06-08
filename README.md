# Bya Marcondes — Nail Designer (React + Tailwind v4)

Landing page modular: cada componente vive na sua própria pasta com o par
`Componente.jsx` + `Componente.css` lado a lado.

## Rodar
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de produção
```

## Estrutura
```
src/
├── App.jsx
├── main.jsx
├── styles/theme.css            # tokens (CSS vars) + Tailwind + layout (.container-x, .section)
├── data/content.js             # textos, preços, imagens, navegação
├── assets/
│   ├── images/                 # imagens locais (ver README da pasta)
│   └── logos/                  # logo.svg, favicon.svg (marcas estáticas)
└── components/
    ├── ui/                     # primitivos reutilizáveis (1 pasta cada)
    │   ├── Reveal/             #   Reveal.jsx + Reveal.css
    │   ├── Button/
    │   ├── SectionHeader/
    │   ├── Card/
    │   ├── Logo/
    │   ├── FormField/
    │   ├── NavLink/
    │   ├── SocialLink/
    │   └── ContactInfoItem/
    └── sections/               # seções (cada card também é seu próprio módulo)
        ├── Header/   Hero/
        ├── Services/ ServiceCard/
        ├── Gallery/  GalleryItem/
        ├── Pricing/  PricingCard/
        ├── Testimonials/ TestimonialCard/
        ├── Contact/  Footer/
```

Cada pasta é autossuficiente: o `.css` ao lado contém só os estilos daquele
componente, usando os tokens globais (`var(--primary)` etc.).

O favicon ativo é `public/favicon.svg`; uma cópia para uso como marca fica em
`src/assets/logos/`.
