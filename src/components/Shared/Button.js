import styles from "./Button.module.sass";

const Button = ({ path, children }) => (
  <a className={styles.button} href={path}>
    {children}
  </a>
);

export default Button;
