import PropTypes from "prop-types";
import styles from "./Button.module.sass";

const Button = ({ path, type = "button", onClick, isDisabled, children }) =>
  path ? (
    <a className={styles.button} href={path}>
      {children}
    </a>
  ) : (
    <button
      className={styles.button}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );

export default Button;

Button.prototype = {
  path: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};
