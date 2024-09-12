import { Link } from "react-router-dom";
import { Fullscreen, MapPin, Rotate3D } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ActivityIndicator } from "@/components/activity-indicator";
import { useProperty } from "@/services/property/hooks";
import { CircularProgress } from "@/components/circular-progress";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

const AUTOPLAY_DELAY = 5000;

export function Hero() {
  const { status, data: property } = useProperty(1, {
    q: { medias: "1", progress: "1" },
  });

  if (status === "error") {
    return (
      <div className="center-flex h-screen w-full">
        <p className="text-red-500">
          Erreur lors du chargement de la propriété
        </p>
      </div>
    );
  }

  if (status === "pending" || !property) {
    return (
      <div className="center-flex h-screen w-full">
        <ActivityIndicator />
      </div>
    );
  }

  return (
    <section id="hero-section">
      <div className="relative h-screen">
        <Swiper
          slidesPerView={1}
          className="relative h-full"
          modules={[Autoplay, Pagination]}
          pagination={{
            clickable: true,
            bulletClass: "header-carousel-bullet",
            bulletActiveClass: "header-carousel-bullet-active",
          }}
          autoplay={{
            delay: AUTOPLAY_DELAY,
          }}
        >
          {property.medias!.map(({ id, url }) => (
            <SwiperSlide
              key={id}
              className="relative h-full border"
            >
              <img
                alt={`Maison N. ${id}`}
                src={url}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* BUTTONS */}
        <div className="absolute right-8 top-1/2 z-20 -translate-y-1/2 transform">
          <div className="space-y-8">
            <Link
              to="#"
              className="flex flex-col items-center"
            >
              <Button
                pill
                size="icon"
                variant="secondary"
                className="h-14 w-14"
              >
                <Rotate3D size={32} />
              </Button>
              <span className="mt-2 text-sm font-bold text-white">
                Maquette 3D
              </span>
            </Link>

            <Link
              to="#"
              className="flex flex-col items-center"
            >
              <Button
                pill
                size="icon"
                variant="secondary"
                className="h-14 w-14"
              >
                <Fullscreen size={32} />
              </Button>
              <span className="mt-2 text-sm font-bold text-white">
                Maquette 2D
              </span>
            </Link>

            <div className="flex flex-col items-center text-white">
              <CircularProgress
                percentage={property.progress!.rate}
                sqSize={64}
              />
              <h3 className="mt-2 font-bold text-[#b3e690]">Réalisation</h3>
            </div>
          </div>
        </div>

        {/* DETAILS */}
        <div className="absolute bottom-0 left-8 right-8 z-10 mx-auto translate-y-[calc(100%_-_84px)] transform bg-emerald-900/80">
          <div className="flex flex-col sm:flex-row">
            <div className="shrink-0 px-10 py-8 text-white">
              <h3 className="text-3xl font-bold text-[#b3e690]">Mellona</h3>

              {/* ADDRESS */}
              <div className="mt-2 font-bold">
                <h4 className="text-xl">{property.city}</h4>
                <div className="inline-flex items-center gap-x-1 text-gray-300">
                  <MapPin size={18} />
                  <p>
                    {property.commune}
                    {property.street ? <span> - {property.street}</span> : null}
                  </p>
                </div>
              </div>
            </div>

            <Separator
              orientation="vertical"
              className="hidden h-28 self-center bg-gray-400 sm:block"
            />

            <div className="sm:center-flex hidden shrink-0 px-10 py-8 text-white">
              <div className="flex flex-col items-start gap-3">
                <div className="text-lg [&>p>span]:font-bold">
                  <p>
                    Appartements neufs de{" "}
                    <span className="text-[#b3e690]">
                      {property.rooms}{" "}
                      {property.rooms <= 1 ? "pièce" : "pièces"}
                    </span>
                  </p>
                  <p>
                    À partir de{" "}
                    <span className="text-xl text-[#b3e690]">
                      {formatCurrency(property.price)}
                    </span>
                  </p>
                </div>

                <Button
                  variant="lime"
                  className="lg:hidden"
                >
                  En savoir plus
                </Button>
              </div>
            </div>

            <div className="lg:center-flex ml-auto hidden pr-10">
              <Button variant="lime">En savoir plus</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-32 space-y-10">
        <h2 className="text-xl font-bold">Description</h2>
        <p>{property.description}</p>
      </div>
    </section>
  );
}
