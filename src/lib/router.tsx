import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { AboutPage } from "@/pages/about";
import { PortfolioPage } from "@/pages/portfolio";
import { ContactPage } from "@/pages/contact";
import { Shield } from "@/components/shield";
import { RequireAuth } from "@/components/require-auth";
import { LoginPage } from "@/pages/login";
import { RegistrationPage } from "@/pages/register";
import { AuthLayout } from "@/components/auth-layout";
import { DashboardLayout } from "@/pages/dashboard/components/layout";
import { MyProjectsPage } from "@/pages/my-projects";
import { ProfilePage } from "@/pages/profile";
import { ProjectDetailsPage } from "@/pages/project-details";

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
        element: <DashboardLayout />,
        children: [
          {
            path: "my-projects",
            element: <MyProjectsPage />,
          },
          {
            path: "/my-projects/:id",
            element: <ProjectDetailsPage />,
          },
          {
            path: "/profile",
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
]);
