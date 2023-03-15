import { useEffect, useState } from "react";
import { getUsers } from "../../apiMethods/helpers";
import Button from "../Shared/Button";
import UserCard from "./UserCard";
import Section from "../Shared/Section";
import styles from "./UsersSection.module.sass";

const UsersSection = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getUsers()
      .then(data => setUsers(data.users))
      .catch(error => setError(error.message));
  }, []);
  return (
    <Section title="Working with GET request">
      {error && <p>{`${error}. Please reload the page`}</p>}
      <ul className={styles.list}>
        {users.map(user => (
          <li>
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              id={user.id}
              phone={user.phone}
              position={user.position}
            />
          </li>
        ))}
      </ul>
      {users.length > 0 && <Button>Show More</Button>}
    </Section>
  );
};

export default UsersSection;
