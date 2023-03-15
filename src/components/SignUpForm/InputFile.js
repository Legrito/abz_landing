import PropTypes from "prop-types";
import { useEffect } from "react";
import styles from "./InputFile.module.sass";

const InputFile = ({ file, error, onChange, onBlur }) => {
  // useEffect(() => {
  //   console.log(file);
  // });
  return (
    <div className={styles.wrap}>
      <label
        htmlFor="file-upload"
        className={`${styles.upload} ${error ? styles["with-error"] : ""}`}
      >
        {file ? file.name : "Upload your photo"}
      </label>
      <input
        id="file-upload"
        type="file"
        className={styles.input}
        onBlur={onBlur}
        onChange={onChange}
      />
      <span className={styles.error}>{error}</span>
    </div>
  );
};

InputFile.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputFile;
