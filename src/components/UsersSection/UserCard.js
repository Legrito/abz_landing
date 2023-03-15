import avatar from "../../assets/photo-cover.svg";
import styles from "./UserCard.module.sass";

const UserCard = ({ name, email, id, phone, position }) => {
  return (
    <article className={styles.card} id={id}>
      <div className={styles.thumb}>
        <img src={avatar} alt={name} />
      </div>
      <p>{name}</p>
      <div>
        <p>{position}</p>
        <address>
          <a href={`mailto:${email}`}>{email}</a>
          <a href={`tel:${phone}`}>{phone}</a>
        </address>
      </div>
    </article>
  );
};

export default UserCard;
