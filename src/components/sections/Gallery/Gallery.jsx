import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { GalleryItem } from "../GalleryItem/GalleryItem";
import { galleryImages } from "../../../data/content";
import "./Gallery.css";

export function Gallery() {
  return (
    <section id="galeria" className="section section--background">
      <div className="container-x">
        <SectionHeader eyebrow="Portfolio" title="Trabalhos" highlight="exclusivos" />
        <div className="gallery__grid">
          {galleryImages.map((image, i) => (
            <GalleryItem key={image.url} {...image} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
