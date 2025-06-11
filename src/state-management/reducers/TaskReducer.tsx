export interface Task {
  id: number;
  title: string;
}

type AddTaskAction = {
  type: "ADD_TASK";
  newTask: Task;
};

type DeleteTaskAction = {
  type: "DELETE_TASK";
  id: number;
};

type TaskAction = AddTaskAction | DeleteTaskAction;

const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD_TASK":
      return [action.newTask, ...tasks];
    case "DELETE_TASK":
      return tasks.filter((t) => t.id !== action.id);
    default:
      return tasks;
  }
};

export default tasksReducer;
