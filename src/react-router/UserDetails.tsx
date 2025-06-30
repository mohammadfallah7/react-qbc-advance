import { useParams, useSearchParams } from "react-router";

const UserDetails = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("age"));

  return <p>User {id}</p>;
};

export default UserDetails;
