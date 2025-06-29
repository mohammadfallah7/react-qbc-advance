import { createBrowserRouter } from "react-router";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailsPage";

const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/users", Component: UserListPage },
  { path: "/contact", Component: ContactPage },
  { path: "/users/:id", Component: UserDetailPage },
]);

export default router;
