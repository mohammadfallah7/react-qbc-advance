import { useRef, type FormEvent } from "react";
import useAuthStore from "../state-management/stores/useAuthStore";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (nameRef.current && nameRef.current.value) {
      login(nameRef.current.value);
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={nameRef}
        type="text"
        className="form-control mb-2"
        placeholder="Name"
      />
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default LoginPage;
