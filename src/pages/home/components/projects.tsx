import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

const PROJECTS = [
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

const ProjectCard = ({
  price,
  location,
  status,
  title,
  thumbnail,
}: (typeof PROJECTS)[number]) => {
  return (
    <div className="overflow-hidden rounded-xl border shadow shadow-gray-200">
      <div className="relative">
        <div className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-0.5">
          <span className="text-sm text-white">{status.label}</span>
        </div>
        <img
          src={thumbnail}
          alt={title}
          className="w-full object-cover"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-medium sm:text-2xl">{title}</h3>
            <div className="inline-flex items-center text-gray-500">
              <MapPin size={14} />
              <span className="ml-0.5 text-sm">{location}</span>
            </div>
          </div>

          <span className="sm:leading-8">{formatCurrency(price)}</span>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-4 space-x-2">
          {status.value === "available" ? (
            <Button
              pill
              size="sm"
              variant="outline"
            >
              Visite Virtuelle
            </Button>
          ) : (
            <>
              <Button
                pill
                size="sm"
                variant="outline"
              >
                Visite 2D
              </Button>
              <Button
                pill
                size="sm"
                variant="outline"
              >
                Visite 3D
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export function Projects() {
  return (
    <section className="w-full pt-16 md:pt-40">
      <div className="container flex flex-col gap-y-20">
        {/* DESCRIPTION */}
        <div className="mx-auto flex max-w-[42rem] flex-col items-center space-y-8 text-center">
          <h2 className="section-title">Projets</h2>
          <h3 className="text-4xl font-black">
            Nous Concevons des Solutions
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>Immobilières d'Excellence
          </h3>
        </div>

        {/* CARDS */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
