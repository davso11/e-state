import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useAuth } from "@/contexts/auth";
import { Button } from "./ui/button";

export const AuthLayout = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  if (auth?.user) {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );
  }

  return (
    <div
      id="login-page"
      className="min-h-screen"
    >
      <div className="flex-1 flex-col items-start p-5">
        <div className="mb-4">
          <Button
            pill
            size="icon"
            variant="ghost"
            onClick={() => navigate("/")}
          >
            <ChevronLeft size={20} />
          </Button>
        </div>

        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:max-w-[28rem]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
