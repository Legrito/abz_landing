import PropTypes from "prop-types";
import styles from "./InputFile.module.sass";

const InputFile = ({ file, error, onChange }) => (
  <div className={styles.wrap} data-item>
    <label
      htmlFor="file-upload"
      className={`${styles.upload} ${error ? styles["with-error"] : ""}`}
    >
      <span className="ellipsis">{file ? file.name : "Upload your photo"}</span>
    </label>
    <input
      id="file-upload"
      type="file"
      className={styles.input}
      onChange={onChange}
    />
    <span className={styles.error}>{error}</span>
  </div>
);

InputFile.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputFile;
