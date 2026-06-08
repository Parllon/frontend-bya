import "./Button.css";

export function Button({ variant = "primary", block = false, className = "", children, ...rest }) {
  const classes = [
    "btn",
    variant === "outline" ? "btn--outline" : "btn--primary",
    block ? "btn--block" : "",
    className,
  ].filter(Boolean).join(" ");

  return (
    <button className={classes} {...rest}>{children}</button>
  );
}
