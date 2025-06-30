import { createBrowserRouter } from "react-router";
import HomePage from "./HomePage";
import UsersPage from "./UsersPage";
import ContactPage from "./ContactPage";
import UserDetails from "./UserDetails";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      {
        path: "users",
        Component: UsersPage,
        children: [{ path: ":id", Component: UserDetails }],
      },
      { path: "contact", Component: ContactPage },
    ],
  },
]);

export default router;
