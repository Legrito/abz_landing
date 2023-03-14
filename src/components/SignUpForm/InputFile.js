import PropTypes from "prop-types";
import styles from "./InputFile.module.sass";

const InputFile = ({ value, error, placeholder, onChange, onBlur }) => {
  return (
    <div className={styles.wrap}>
      <label for="file-upload" class={styles.upload}>
        Upload your photo
      </label>
      <input id="file-upload" type="file" className={styles.input} />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

InputFile.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputFile;
