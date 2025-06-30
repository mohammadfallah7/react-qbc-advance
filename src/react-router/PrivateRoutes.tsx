import { Navigate, Outlet } from "react-router";

import useAuthStore from "../state-management/stores/useAuthStore";

const PrivateRoutes = () => {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
