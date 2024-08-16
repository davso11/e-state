import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { AboutPage } from "@/pages/about";
import { PortfolioPage } from "@/pages/portfolio";
import { ContactPage } from "@/pages/contact";
import { Shield } from "@/components/shield";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Shield />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);
