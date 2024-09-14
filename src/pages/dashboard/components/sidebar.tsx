import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DASHBOARD_NAV_ITEMS } from "@/constants/navigation";
import { useAuth } from "@/contexts/auth";
import { cn } from "@/lib/utils";

export const DashboardSidebar = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <aside className="h-full w-64 border bg-gray-100 p-6">
      <div className="flex h-full flex-col">
        {/* LOGO */}
        <Link
          to="/dashboard"
          className="inline-flex items-center space-x-2"
        >
          <div className="h-9 w-9 rounded-full bg-slate-300" />
          <span className="text-lg font-bold">Coram Deo</span>
        </Link>

        {/* NAV */}
        <nav className="mt-8 flex-1 space-y-1">
          {DASHBOARD_NAV_ITEMS.map(({ _isActive, label, path }) => {
            return (
              <NavLink
                key={path}
                to={path}
                onClick={(e) => (!_isActive ? e.preventDefault() : null)}
                className={({ isActive }) =>
                  cn(
                    "block px-2 py-1.5",
                    isActive && _isActive && "rounded-lg bg-gray-200",
                    !_isActive && "cursor-not-allowed text-gray-400",
                  )
                }
              >
                {label}
              </NavLink>
            );
          })}
        </nav>

        {/* LOGOUT */}
        <Button
          size="sm"
          className="mt-4"
          variant="destructive"
          onClick={logout}
        >
          Déconnexion
        </Button>
      </div>
    </aside>
  );
};
