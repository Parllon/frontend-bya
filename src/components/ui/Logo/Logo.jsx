import "./Logo.css";
import logoImg from "../../../assets/logos/Logo_Bya_Marcondes.png";

export function Logo({ size = "default" }) {
  return (
    <span className={`logo logo--${size}`}>
      <img src={logoImg} alt="Logo Bya Marcondes" className="logo__img" />
    </span>
  );
}