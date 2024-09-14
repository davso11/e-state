import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { AboutPage } from "@/pages/about";
import { PortfolioPage } from "@/pages/portfolio";
import { ContactPage } from "@/pages/contact";
import { Shield } from "@/components/shield";
import { RequireAuth } from "@/components/require-auth";
import { LoginPage } from "@/pages/login";
import { RegistrationPage } from "@/pages/register";
import { DashboardPage } from "@/pages/dashboard";
import { AuthLayout } from "@/components/auth-layout";

export const router = createBrowserRouter([
  {
    element: <Shield />,
    children: [
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
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegistrationPage />,
      },
    ],
  },
  {
    element: <RequireAuth />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
]);
