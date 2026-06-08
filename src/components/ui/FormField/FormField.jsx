import "./FormField.css";

export function FormField({ label, as = "input", options = [], ...rest }) {
  return (
    <div className="form-field">
      <label className="form-field__label">{label}</label>
      {as === "textarea" && (
        <textarea className="form-field__input form-field__input--area" {...rest} />
      )}
      {as === "select" && (
        <select className="form-field__input" {...rest}>
          {options.map((opt) => <option key={opt}>{opt}</option>)}
        </select>
      )}
      {as === "input" && <input className="form-field__input" {...rest} />}
    </div>
  );
}
