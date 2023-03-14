import PropTypes from "prop-types";
import styles from "./InputText.module.sass";

const InputText = ({ value, type, error, placeholder, onChange, onBlur }) => {
  return (
    <div className={styles.wrap}>
      <input
        className={`${styles.input} ${
          error ? styles["input--with-error"] : ""
        }`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

InputText.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputText;
