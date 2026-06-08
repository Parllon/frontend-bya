# Images

Pasta para imagens locais do projeto (fotos de trabalhos, banners, etc.).

Hoje a galeria usa URLs remotas definidas em `src/data/content.js`.
Para usar imagens locais:

1. Coloque o arquivo aqui, ex.: `src/assets/images/trabalho-01.jpg`
2. Importe e use no data:

   import trabalho01 from "../assets/images/trabalho-01.jpg";
   export const galleryImages = [{ url: trabalho01, alt: "Trabalho 01" }, ...];

O Vite resolve o import e otimiza o asset no build.
