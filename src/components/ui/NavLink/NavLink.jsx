import "./NavLink.css";

export function NavLink({ href, children, uppercase = true }) {
  return (
    <a href={href} className={`nav-link ${uppercase ? "nav-link--upper" : ""}`.trim()}>
      {children}
    </a>
  );
}
