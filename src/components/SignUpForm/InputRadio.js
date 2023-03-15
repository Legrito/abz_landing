import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./InputRadio.module.sass";

const InputRadio = ({
  id,
  label,
  onChange,
  name,
  value,
  isChecked,
  isDisabled,
}) => {
  return (
    <div
      className={`${styles.wrap} ${isDisabled ? styles["is-disabled"] : ""}`}
    >
      <input
        id={id}
        className={styles.input}
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        checked={isChecked}
        aria-checked={isChecked}
      />
      <label className={styles.label} htmlFor={id}>
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
