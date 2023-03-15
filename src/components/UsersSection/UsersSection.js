import { useContext, useEffect, useState } from "react";
import { getUsers } from "../../apiMethods/helpers";
import Button from "../Shared/Button";
import UserCard from "./UserCard";
import Section from "../Shared/Section";
import styles from "./UsersSection.module.sass";
import Loader from "../Shared/Loader";
import { AppContext } from "../../App";

const UsersSection = () => {
  const { isRegistered } = useContext(AppContext);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUsers(page)
      .then(data => {
        setHasNextPage(!!data.links.next_url);
        setUsers(data.users);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getUsers("1")
      .then(data => {
        setHasNextPage(!!data.links.next_url);
        setUsers(data.users);
      })
      .catch(error => setError(error.message))
      .finally(() => {
        setIsLoading(false);
        setPage(1);
      });
  }, [isRegistered]);

  const handleClick = () => {
    setIsLoading(true);
    getUsers(page + 1)
      .then(data => {
        setHasNextPage(data.links.next_url);
        setUsers(prevUsers => [...prevUsers, ...data.users]);
      })
      .catch(error => setError(error.message))
      .finally(() => {
        setPage(prevPage => prevPage + 1);
        setIsLoading(false);
      });
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
              photo={user.photo}
            />
          </li>
        ))}
      </ul>
      {isLoading && <Loader />}
      {users.length > 0 && hasNextPage && (
        <Button isDisabled={!hasNextPage} onClick={handleClick}>
          Show More
        </Button>
      )}
    </Section>
  );
};

export default UsersSection;
