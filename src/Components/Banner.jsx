// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Autoplay } from "swiper/modules";

export default function Banner() {
  return (
    <div className="mx-auto w-max md:container">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectFade, Autoplay]}
        className="mySwiper aspect-[11/4.8] max-w-[1400px] rounded-xl bg-black"
      >
        <SwiperSlide className="">
          <img
            className="h-full w-full rounded-xl object-cover object-center"
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQiX1vaoWWbfHRBS-iVYzwFNgUJ7WcjzO_GBXufRHoRW4bi9YLS-YZnZmBx1CXzQSGXkIJEZozD_P-YOUrijreo5Q"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <img
            className="h-full w-full rounded-xl object-cover object-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZFSnro5F-KniBWmx8p9ZoeWl4TcPJwHaHPnO9Dc2PgWBFMVtq_mQvXqgCIR5lUnna-cZXOO7j8-Q105jThA84vnJ0VBlI8vRiqxeeg"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <img
            className="h-full w-full rounded-xl object-cover object-center"
            src="https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
