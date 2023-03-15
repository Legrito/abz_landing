import styles from "./Fieldset.module.sass";

const Fieldset = ({ title, children }) => {
  return (
    <fieldset className={styles.fieldset} data-item>
      {title && <legend className={styles.title}>{title}</legend>}
      {children}
    </fieldset>
  );
};

export default Fieldset;
