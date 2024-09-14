export const PROJECTS = [
  {
    id: 1,
    name: "Duplex",
    city: "Abidjan",
    commune: "Cocody",
    price: 16,
    paid: 8,
    description: "Construction d'une villa de 5 pièces à Cocody avec piscine.",
    longDescription:
      "Construction d'une villa de 5 pièces à Cocody avec piscine. La villa est située dans un quartier calme et sécurisé. Elle est composée de 5 pièces, 2 salons, 3 chambres, 2 salles de bain, 1 cuisine, 1 piscine, 1 jardin. La villa est construite sur un terrain de 500m². La villa est située à Cocody, un quartier résidentiel de la ville d'Abidjan. Cocody est un quartier calme et sécurisé. La villa est proche de toutes les commodités: écoles, hôpitaux, supermarchés, restaurants, etc.",
    status: "En cours",
  },
];

export const PUBLIC_PROJECTS = [
  {
    id: 1,
    title: "Equinoxe",
    location: "Abidjan",
    status: {
      label: "En construction",
      value: "in_progress",
    },
    thumbnail:
      "https://www.lp-promotion.com/sites/default/files/public/styles/card/public/program/thumbnail/prog_Vignette-equinoxe.jpg.webp?itok=yqPCytya",
    price: 53_000_000,
  },
  {
    id: 2,
    title: "Pure Hre",
    location: "Abidjan",
    status: {
      label: "Derneire opportunité",
      value: "available",
    },
    thumbnail:
      "https://www.lp-promotion.com/sites/default/files/public/styles/card/public/program/thumbnail/prog_Vignette-pure.jpg.webp?itok=nF6_nNyE",
    price: 67_000_000,
  },
  {
    id: 3,
    title: "Etincelles",
    location: "Azaguié",
    status: {
      label: "Disponible pour achat",
      value: "available",
    },
    thumbnail:
      "https://www.lp-promotion.com/sites/default/files/public/styles/card/public/program/thumbnail/prog_Vignette-equinoxe.jpg.webp?itok=yqPCytya",
    price: 16_000_000,
  },
  {
    id: 4,
    title: "Terra Sylva",
    location: "San Pedro",
    status: {
      label: "Lancement commercial",
      value: "commercial_launch",
    },
    thumbnail:
      "https://www.lp-promotion.com/sites/default/files/public/styles/card/public/program/thumbnail/prog_Vignette-terra-sylva.jpg.webp?itok=aRWU6gnl",
    price: 47_000_000,
  },
] as const;
