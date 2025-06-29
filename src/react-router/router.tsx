import { createBrowserRouter } from "react-router";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";

const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/users", Component: UserListPage },
  { path: "/contact", Component: ContactPage },
]);

export default router;
