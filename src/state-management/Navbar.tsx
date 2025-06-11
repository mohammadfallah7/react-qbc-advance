import LoginStatus from "./LoginStatus";
import type { Task } from "./reducers/TaskReducer";

interface Props {
  tasks: Task[];
}

const NavBar = ({ tasks }: Props) => {
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
