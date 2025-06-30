import { createBrowserRouter } from "react-router";
import HomePage from "./HomePage";
import UsersPage from "./UsersPage";
import ContactPage from "./ContactPage";
import UserDetails from "./UserDetails";
import Layout from "./Layout";
import ErrorPage from "./ErrorPage";
import About from "./About";
import LoginPage from "./LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "/login", Component: LoginPage },
      {
        path: "users",
        Component: UsersPage,
        children: [{ path: ":id", Component: UserDetails }],
      },
      { path: "contact", Component: ContactPage },
      { path: "about", Component: About },
    ],
  },
]);

export default router;
