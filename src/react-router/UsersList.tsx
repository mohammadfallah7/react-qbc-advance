import { Link } from "react-router";

const UsersList = () => {
  const users = [
    { id: 1, name: "Mohammad" },
    { id: 2, name: "Reza" },
    { id: 3, name: "Ali" },
  ];

  return (
    <ul className="list-group col">
      {users.map((user) => (
        <li className="list-group-item" key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
