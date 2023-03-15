import { useEffect, useState } from "react";
import { getUsers } from "../../apiMethods/helpers";
import Button from "../Shared/Button";
import UserCard from "./UserCard";
import Section from "../Shared/Section";
import styles from "./UsersSection.module.sass";

const UsersSection = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    getUsers(page)
      .then(data => {
        setHasNextPage(!!data.links.next_url);
        setUsers(data.users);
      })
      .catch(error => setError(error.message));
  }, []);

  const handleClick = () => {
    getUsers(page + 1)
      .then(data => {
        setHasNextPage(data.links.next_url);
        setUsers(prevUsers => [...prevUsers, ...data.users]);
      })
      .catch(error => setError(error.message))
      .finally(setPage(prevPage => prevPage + 1));
  };

  return (
    <Section id="users" title="Working with GET request">
      {error && <p>{`${error}. Please reload the page`}</p>}
      <ul className={styles.list}>
        {users.map(user => (
          <li className={styles.card} key={user.id}>
            <UserCard
              name={user.name}
              email={user.email}
              id={user.id}
              phone={user.phone}
              position={user.position}
            />
          </li>
        ))}
      </ul>
      {users.length > 0 && (
        <Button isDisabled={!hasNextPage} onClick={handleClick}>
          Show More
        </Button>
      )}
    </Section>
  );
};

export default UsersSection;
