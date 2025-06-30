import { create } from "zustand";

type AuthStoreType = {
  user: string;
  login: (name: string) => void;
  logout: () => void;
};

const useAuthStore = create<AuthStoreType>((set) => ({
  user: localStorage.getItem("token") || "",
  login: (name: string) => {
    set(() => ({ user: name }));
    localStorage.setItem("token", name);
  },
  logout: () => {
    set(() => ({ user: "" }));
    localStorage.removeItem("token");
  },
}));

export default useAuthStore;
