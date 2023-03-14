import styles from "./Loader.module.sass";
import loader from "../../assets/preloader.svg";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <img className={styles.circle} src={loader} alt="Loader"></img>
      <img className={styles.circle} src={loader} alt="Loader"></img>
    </div>
  );
};

export default Loader;
