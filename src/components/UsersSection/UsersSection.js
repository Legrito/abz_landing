import { useEffect, useState } from "react";
import { getUsers } from "../../apiMethods/helpers";
import Button from "../Shared/Button";
import UserCard from "./UserCard";
import Section from "../Shared/Section";

const UsersSection = () => {
  const [users, setUsers] = useState(["1"]);
  // useEffect(() => {
  //   getUsers();
  // }, []);
  return (
    <Section title="Working with GET request">
      <ul>
        {users.map(user => (
          <li>
            <UserCard />
          </li>
        ))}
      </ul>
      <Button>Show More</Button>
    </Section>
  );
};

export default UsersSection;
