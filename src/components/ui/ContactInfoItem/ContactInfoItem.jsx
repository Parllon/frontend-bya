import "./ContactInfoItem.css";

export function ContactInfoItem({ icon: Icon, title, text, href }) {
  const content = (
    <>
      <div className="contact-info__icon-wrap">
        <Icon className="contact-info__icon" />
      </div>
      <div>
        <h3 className="contact-info__title">{title}</h3>
        <p className="contact-info__text">{text}</p>
      </div>
    </>
  );

  // Se houver um link definido (como no WhatsApp ou Instagram), renderiza como tag <a>
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="contact-info contact-info--link">
        {content}
      </a>
    );
  }

  return <div className="contact-info">{content}</div>;
}