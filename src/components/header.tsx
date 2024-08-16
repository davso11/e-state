import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import StickyHeadroom from "@integreat-app/react-sticky-headroom";
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
import { cn } from "@/lib/utils";

export function Header() {
  const [isSheetOpened, setIsSheedOpened] = useState(false);

  const onNavItemClick = () => {
    setIsSheedOpened(false);
  };

  return (
    <StickyHeadroom scrollHeight={100}>
      <header>
        <div className="container flex items-center justify-between py-3">
          {/* TODO: ADD LOGO */}
          <Link to="/">
            <div className="h-9 w-9 rounded-full bg-slate-300" />
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
                    return path === "/contact" ? (
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
          <nav className="hidden items-center gap-x-6 md:inline-flex">
            {NAV_ITEMS.map(({ label, path }) => {
              return path === "/contact" ? (
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
    </StickyHeadroom>
  );
}
