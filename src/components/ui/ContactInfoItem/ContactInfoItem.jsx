import "./ContactInfoItem.css";

export function ContactInfoItem({ icon: Icon, title, text }) {
  return (
    <div className="contact-info">
      <div className="contact-info__icon-wrap">
        <Icon className="contact-info__icon" />
      </div>
      <div>
        <h3 className="contact-info__title">{title}</h3>
        <p className="contact-info__text">{text}</p>
      </div>
    </div>
  );
}
