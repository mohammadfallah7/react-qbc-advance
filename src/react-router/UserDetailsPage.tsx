import { useParams, useSearchParams } from "react-router";

const UserDetailPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("age"));

  return <p>User {id}</p>;
};

export default UserDetailPage;
