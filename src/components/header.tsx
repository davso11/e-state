import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AlignJustify as MenuIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_ITEMS } from "@/constants/navigation";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/scroll";
import { cn } from "@/lib/utils";
import "swiper/css/pagination";
import "swiper/css";

export function Header() {
  const [isSheetOpened, setIsSheedOpened] = useState(false);
  const { isScrolling } = useScroll();
  const location = useLocation();

  // Check if the current page is the home page
  const isHomePage = location.pathname === "/";

  const onNavItemClick = () => {
    setIsSheedOpened(false);
  };

  return (
    <header
      className={cn(
        "sticky left-0 top-0 z-50 w-full bg-transparent",
        isScrolling && "bg-background/50 shadow backdrop-blur-sm",
        isHomePage && "fixed",
      )}
    >
      <div className="container flex items-center justify-between py-4">
        <Link
          to="/"
          className="inline-flex items-center space-x-2"
        >
          <div className="h-9 w-9 rounded-full bg-slate-300" />
          <span
            className={cn(
              "text-lg font-bold text-white",
              isScrolling && "text-black",
            )}
          >
            Coram Deo
          </span>
        </Link>

        {/* SMALL SCREENS */}
        <div className="md:hidden">
          <Sheet
            open={isSheetOpened}
            onOpenChange={setIsSheedOpened}
          >
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="outline"
              >
                <MenuIcon size={16} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              {/* REQUIRED */}
              <SheetHeader className="space-y-0">
                <SheetTitle className="hidden">Menu</SheetTitle>
                <SheetDescription />
              </SheetHeader>
              <nav className="flex flex-col gap-y-4">
                {NAV_ITEMS.map(({ label, path }) => {
                  return path === "/my-projects" ? (
                    <Button
                      key={path}
                      size="sm"
                      className="rounded-lg"
                      asChild
                    >
                      <NavLink
                        key={path}
                        to={path}
                        onClick={onNavItemClick}
                      >
                        {label}
                      </NavLink>
                    </Button>
                  ) : (
                    <NavLink
                      key={path}
                      to={path}
                      className={({ isActive }) =>
                        cn(isActive && "underline underline-offset-[3px]")
                      }
                      onClick={onNavItemClick}
                    >
                      {label}
                    </NavLink>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* LARGE SCREENS */}
        <nav
          className={cn(
            "hidden items-center gap-x-6 text-white md:inline-flex",
            isScrolling && "text-inherit",
          )}
        >
          {NAV_ITEMS.map(({ label, path }) => {
            return path === "/my-projects" ? (
              <Button
                key={path}
                size="sm"
                className="rounded-lg"
                asChild
              >
                <NavLink
                  key={path}
                  to={path}
                >
                  {label}
                </NavLink>
              </Button>
            ) : (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  cn(isActive && "underline underline-offset-[3px]")
                }
              >
                {label}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
