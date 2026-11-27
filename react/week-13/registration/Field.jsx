import { errorClass, fieldClass, labelClass } from "../formStyles";

// One labelled input. The error only shows once the user has left the field (touched),
// so they aren't told off before they've finished typing.
const Field = ({ name, label, value, error, touched, onChange, onBlur, ...props }) => {
  const showError = touched && error;
  return (
    <div>
      <label htmlFor={`reg-${name}`} className={labelClass}>
        {label}
      </label>
      <input
        id={`reg-${name}`}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={!!showError}
        aria-describedby={`reg-${name}-error`}
        className={fieldClass(showError)}
        {...props}
      />
      <p id={`reg-${name}-error`} className={errorClass}>
        {showError ? error : ""}
      </p>
    </div>
  );
};

export default Field;
