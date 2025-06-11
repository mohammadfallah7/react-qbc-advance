import { create } from "zustand";

type AuthStoreType = {
  user: string;
  login: (name: string) => void;
  logout: () => void;
};

const useAuthStore = create<AuthStoreType>((set) => ({
  user: "",
  login: (name: string) => set(() => ({ user: name })),
  logout: () => set(() => ({ user: "" })),
}));

export default useAuthStore;
