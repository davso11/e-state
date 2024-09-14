import { Outlet } from "react-router-dom";
import { DashboardSidebar } from "./sidebar";

export const DashboardLayout = () => {
  return (
    <div className="flex h-screen w-full">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto p-8">
        <Outlet />
      </div>
    </div>
  );
};
