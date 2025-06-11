import { useReducer } from "react";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/Navbar";
import tasksReducer from "./state-management/reducers/TaskReducer";

const App = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <>
      <NavBar tasks={tasks} />
      <HomePage tasks={tasks} dispatch={dispatch} />
    </>
  );
};

export default App;
