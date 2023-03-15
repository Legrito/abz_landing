import avatar from "../../assets/photo-cover.jpg";
import styles from "./UserCard.module.sass";

const UserCard = ({ name, photo, email, id, phone, position }) => {
  return (
    <article className={styles.card} id={id}>
      <div className={styles.thumb}>
        <img src={photo ?? avatar} alt={name} />
      </div>
      <p className={`ellipsis ${styles.name}`}>{name}</p>
      <div className={styles.contacts}>
        <p className="ellipsis">{position}</p>
        <address>
          <a href={`mailto:${email}`} className="ellipsis">
            {email}
          </a>
          <a href={`tel:${phone}`} title={phone}>
            {phone}
          </a>
        </address>
      </div>
    </article>
  );
};

export default UserCard;
