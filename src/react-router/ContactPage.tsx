import { Navigate, useNavigate } from "react-router";
import useAuth from "./hooks/useAuth";

const ContactPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // Redirect the user to the home page
        navigate("/");
      }}
    >
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ContactPage;
