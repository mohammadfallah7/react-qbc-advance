import { Link } from "react-router";

const HomePage = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
        mollitia!
      </p>
      {/* <a href="/users">Users</a> */}
      <Link to="/users">Users</Link>
    </>
  );
};

export default HomePage;
