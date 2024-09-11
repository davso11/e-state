import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { HEADER_CAROUSEL_ITEMS } from "@/constants/header";

const AUTOPLAY_DELAY = 5000;

export function Hero() {
  return (
    <section
      id="hero-section"
      className="h-screen"
    >
      <Swiper
        slidesPerView={1}
        className="h-full"
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
        {HEADER_CAROUSEL_ITEMS.map((el) => (
          <SwiperSlide
            key={el.id}
            className="relative h-full border"
          >
            <img
              alt={`Maison N. ${el.id}`}
              src={el.img}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
