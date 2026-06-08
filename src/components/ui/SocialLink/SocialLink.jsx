import "./SocialLink.css";

export function SocialLink({ href = "#", label, icon: Icon }) {
  return (
    <a href={href} aria-label={label} className="social-link">
      <Icon className="social-link__icon" />
    </a>
  );
}
