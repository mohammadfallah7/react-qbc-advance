import useAuthStore from "./stores/useAuthStore";

const LoginStatus = () => {
  const { user, login, logout } = useAuthStore();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login("Mohammad")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
