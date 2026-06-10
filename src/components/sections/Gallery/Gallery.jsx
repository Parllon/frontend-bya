import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { GalleryItem } from "../GalleryItem/GalleryItem";
import { Lightbox } from "../../ui/Lightbox/Lightbox";
import { galleryImages } from "../../../data/content";
import "./Gallery.css";

export function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="galeria" className="section section--background">
      <div className="container-x">
        <SectionHeader eyebrow="Portfolio" title="Trabalhos" highlight="exclusivos" />
        <div className="gallery__grid">
          {galleryImages.map((image, i) => (
            <GalleryItem
              key={image.url}
              {...image}
              delay={i * 0.1}
              onOpen={() => setOpenIndex(i)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox
            images={galleryImages}
            startIndex={openIndex}
            onClose={() => setOpenIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
