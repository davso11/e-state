import { RouterProvider } from "react-router-dom";
import { router } from "@/components/router";

export function App() {
  return <RouterProvider router={router} />;
}
