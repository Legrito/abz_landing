import styles from "./InputText.module.sass";

const InputText = ({ value, type, error, placeholder, onChange }) => {
  return (
    <label className={styles.label}>
      <input
        className={`${styles.input} ${
          error ? styles["input--with-error"] : ""
        }`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
};

export default InputText;
