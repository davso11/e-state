import { useAuth } from "@/contexts/auth";
import { Navigate, Outlet } from "react-router-dom";

export const RequireAuth = () => {
  const { auth } = useAuth();

  if (!auth?.user) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return <Outlet />;
};
