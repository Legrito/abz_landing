import PropTypes from "prop-types";
import styles from "./InputText.module.sass";

const InputText = ({
  id,
  value,
  type,
  error,
  label,
  placeholder,
  onChange,
  onBlur,
}) => {
  return (
    <div className={styles.wrap} data-item>
      <input
        id={id}
        className={`${styles.input} ${
          error ? styles["input--with-error"] : ""
        }`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

InputText.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputText;
