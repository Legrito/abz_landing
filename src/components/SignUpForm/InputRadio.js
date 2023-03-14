import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./InputRadio.module.sass";

const InputRadio = ({ id, label, onChange, name, isChecked, isDisabled }) => {
  return (
    <div
      className={`${styles.wrap} ${isDisabled ? styles["is-disabled"] : ""}`}
    >
      <input
        id={label}
        className={styles.input}
        type="radio"
        name={name}
        onChange={onChange}
        checked={isChecked}
        aria-checked={isChecked}
      />
      <label className={styles.label} htmlFor={label}>
        <span className={styles.button} />
        <p>{label}</p>
      </label>
    </div>
  );
};

InputRadio.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  isDefaultChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

export default InputRadio;
