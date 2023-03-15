import styles from "./Footer.module.sass";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} footer__container`}>
        <p>&copy; abz.agency specially for the test task</p>
      </div>
    </footer>
  );
};

export default Footer;
