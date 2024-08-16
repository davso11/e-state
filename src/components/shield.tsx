import { Outlet } from "react-router-dom";
import { Header } from "@/components/header";

export function Shield() {
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* CONTENT */}
      <main className="container">
        <Outlet />
      </main>

      {/* FOOTER */}
    </>
  );
}
