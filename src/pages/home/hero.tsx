import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container mt-4">
      <div className="min-h-screen rounded-2xl bg-black/50 bg-[url(/assets/images/hero.jpg)] bg-cover bg-top bg-blend-darken">
        <div className="mx-auto flex min-h-screen max-w-screen-lg flex-col items-center justify-center px-12 py-14">
          <h1 className="text-center text-4xl font-black leading-[1.2em] text-white sm:text-5xl lg:text-7xl">
            L’Excellence au Service de Vos Projets Immobiliers
          </h1>

          <p className="mt-9 text-center text-lg text-white">
            Bienvenue à vous! Nous mettons notre expertise et notre dévouement
            au service de vos projets immobiliers. Que vous soyez à la recherche
            de solutions pour l’immobilier, le foncier ou les infrastructures,
            nous sommes là pour transformer vos visions en réalité avec
            excellence et professionnalisme.
          </p>

          <Button
            className="mt-9"
            size="huge"
          >
            En savoir plus
          </Button>
        </div>
      </div>
    </section>
  );
}
