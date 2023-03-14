import avatar from "../../assets/photo-cover.svg";
import styles from "./UserCard.module.sass";

const UserCard = () => {
  return (
    <article className={styles.card}>
      <div className={styles.thumb}>
        <img src={avatar} alt="Takamaru Ayako Jurrien" />
      </div>
      <p>Takamaru Ayako Jurrien</p>
      <div>
        <p>Lead Independent Director </p>
        <address>
          <a href="mailto:Takamuru@gmail.com">Takamuru@gmail.com</a>
          <a href="tel:+380982789024">+38 (098) 278 90 24</a>
        </address>
      </div>
    </article>
  );
};

export default UserCard;
