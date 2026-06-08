import { Reveal } from "../../ui/Reveal/Reveal";
import "./GalleryItem.css";

export function GalleryItem({ url, alt, delay = 0 }) {
  return (
    <Reveal scale={0.95} y={0} duration={0.5} delay={delay} className="gallery-item">
      <div className="gallery-item__frame">
        <img src={url} alt={alt} className="gallery-item__img" />
      </div>
    </Reveal>
  );
}
