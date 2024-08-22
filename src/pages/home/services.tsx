import { Button } from "@/components/ui/button";
import { BrickWall, Building, Home, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    title: "Immobilier",
    icon: Home,
    description:
      "Achat, vente et gestion de biens pour particuliers et professionnels.",
  },
  {
    title: "Infrastructure",
    icon: Building,
    description:
      "Conception, construction et gestion de projets d'infrastructure innovants et durables.",
  },
  {
    title: "Foncier",
    icon: BrickWall,
    description:
      "Acquisition, développement et conseil en investissement foncier.",
  },
] as const;

// Service card component
const ServiceCard = ({
  title,
  Icon,
  description,
}: {
  title: string;
  Icon: LucideIcon;
  description: string;
}) => {
  return (
    <div className="rounded-xl border p-8 text-center shadow shadow-gray-200">
      <div className="flex flex-col items-center space-y-4">
        <Icon size={64} />
        <h4 className="text-2xl font-black">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export function Services() {
  return (
    <section className="w-full pt-16 md:pt-40">
      <div className="container flex flex-col gap-y-20">
        {/* DESCRIPTION */}
        <div className="mx-auto flex max-w-[42rem] flex-col items-center space-y-8 text-center">
          <h2 className="section-title">Nos services</h2>

          <h3 className="text-4xl font-black">
            Nous Concevons des Solutions
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>Immobilières d'Excellence
          </h3>

          <p className="mt-4">
            Nous offrons une gamme complète de services pour répondre à tous vos
            besoins en immobilier, foncier, et infrastructure. Découvrez comment
            nous pouvons vous accompagner dans vos projets
          </p>

          <Button
            size="huge"
            asChild
          >
            <Link to="/about">À Propos</Link>
          </Button>
        </div>

        {/* CARDS */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              Icon={service.icon}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
