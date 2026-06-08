import "./Logo.css";
// Importe a imagem localmente
import logoImg from "../../../assets/logos/Logo_Bya_Marcondes.png";

const SIZES = { small: 40, default: 64, large: 128, xl: 400, xxl: 250 };

export function Logo({ size = "default" }) {
  const px = SIZES[size] ?? SIZES.default;

  return (
    <span className="logo" style={{ width: px, height: px }}>
      <img 
        src={logoImg} 
        alt="Logo Bya Marcondes" 
        className="logo__img"
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'contain',
          // O truque mágico para remover o branco:
          mixBlendMode: 'multiply' 
        }} 
      />
    </span>
  );
}