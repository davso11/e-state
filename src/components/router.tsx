import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { AboutPage } from "@/pages/about";
import { PortfolioPage } from "@/pages/portfolio";
import { ContactPage } from "@/pages/contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);
