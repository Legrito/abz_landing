import { useEffect, useState } from "react";
import { getUsers } from "../../apiMethods/helpers";
import Button from "../Shared/Button";
import UserCard from "./UserCard";

const UsersSection = () => {
  const [users, setUsers] = useState(["1"]);
  // useEffect(() => {
  //   getUsers();
  // }, []);
  return (
    <section>
      <div className={`users__container`}>
        <ul>
          {users.map(user => (
            <li>
              <UserCard />
            </li>
          ))}
        </ul>
      </div>
      <Button>Show More</Button>
    </section>
  );
};

export default UsersSection;
