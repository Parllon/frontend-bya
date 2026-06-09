import "./Button.css";

export function Button({ variant = "primary", block = false, href, className = "", children, ...rest }) {
  const classes = [
    "btn",
    variant === "outline" ? "btn--outline" : "btn--primary",
    block ? "btn--block" : "",
    className,
  ].filter(Boolean).join(" ");

  // Se recebermos um link (href), renderizamos a tag <a>
  if (href) {
    return (
      <a href={href} className={classes} style={{ textDecoration: 'none' }} {...rest}>
        {children}
      </a>
    );
  }

  // Caso contrário, continua a ser um <button> normal
  return (
    <button className={classes} {...rest}>{children}</button>
  );
}