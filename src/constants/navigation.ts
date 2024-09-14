export const NAV_ITEMS = [
  {
    label: "Accueil",
    path: "/",
  },
  {
    label: "Nos projets",
    path: "/portfolio",
  },
  {
    label: "À propos",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "Mon espace",
    path: "/my-projects",
  },
] as const;

export const DASHBOARD_NAV_ITEMS = [
  {
    label: "Projets",
    path: "/my-projects",
    _isActive: true,
  },
  {
    label: "Profil",
    path: "/profile",
    _isActive: false,
  },
] as const;
