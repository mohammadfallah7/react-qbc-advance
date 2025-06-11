import { create } from "zustand";
import type { Task } from "../reducers/TaskReducer";

type TasksStoreType = {
  tasks: Task[];
  addTask: (newTask: Task) => void;
  deleteTask: (id: number) => void;
};

const useTasksStore = create<TasksStoreType>((set) => ({
  tasks: [],
  addTask: (newTask: Task) =>
    set((state) => ({ tasks: [newTask, ...state.tasks] })),
  deleteTask: (id: number) =>
    set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) })),
}));

export default useTasksStore;
