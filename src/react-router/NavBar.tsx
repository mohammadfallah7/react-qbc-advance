import { Link, NavLink } from "react-router";
import useAuthStore from "../state-management/stores/useAuthStore";

const NavBar = () => {
  const { user, logout } = useAuthStore();

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ background: "#f0f0f0", marginBottom: "1rem" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          My App
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link text-danger" : "nav-link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-danger nav-link" : "nav-link"
                }
                to="/users"
              >
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-danger nav-link" : "nav-link"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-danger nav-link" : "nav-link"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        {user ? (
          <button className="btn btn-outline-secondary" onClick={logout}>
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn btn-success">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
