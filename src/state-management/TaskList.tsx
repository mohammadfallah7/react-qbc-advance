import { type Dispatch } from "react";
import { type Task, type TaskAction } from "./reducers/TaskReducer";

interface Props {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TaskList = ({ tasks, dispatch }: Props) => {
  return (
    <>
      <button
        onClick={() =>
          dispatch({
            type: "ADD_TASK",
            newTask: { id: Date.now(), title: "Task " + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "DELETE_TASK", id: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
