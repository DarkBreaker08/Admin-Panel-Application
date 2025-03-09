import { useSelector } from "react-redux";
import { RootState } from "../../types";
import { Navigate, Outlet } from "react-router";

export const Protected = () => {
  const { isAdminLogged } = useSelector(
    (state: RootState) => state.loginStatus
  );

  if (!isAdminLogged) return <Navigate to="/" />;

  return <Outlet />;
};
