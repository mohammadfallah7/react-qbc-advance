import type { Dispatch } from "react";
import type { Task, TaskAction } from "./reducers/TaskReducer";
import TaskList from "./TaskList";

interface Props {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const HomePage = (props: Props) => {
  return <TaskList {...props} />;
};

export default HomePage;
