import styles from "./Button.module.sass";

const Button = ({ path, type = "button", onClick, children }) =>
  path ? (
    <a className={styles.button} href={path}>
      {children}
    </a>
  ) : (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );

export default Button;
