import slider1 from "../assets/images/slider1.avif";
import slider2 from "../assets/images/slider2.jpg";
import slider3 from "../assets/images/slider3.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="relative mx-auto w-max text-white md:container">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectFade, Autoplay]}
        className="mySwiper aspect-[11/4.8] max-w-[1400px] rounded-xl bg-black text-white"
      >
        <SwiperSlide className="relative">
          <img
            className="h-full w-full rounded-xl object-cover object-center"
            src={slider1}
          />
          <div className="absolute inset-0 bg-black bg-opacity-45"></div>
          {/* over text  */}
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="h-full w-full rounded-xl object-cover object-center"
            src={slider2}
          />
          <div className="absolute inset-0 bg-black bg-opacity-45"></div>
          {/* over text  */}
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="h-full w-full rounded-xl object-cover object-center"
            src={slider3}
          />
          <div className="absolute inset-0 bg-black bg-opacity-45"></div>
          {/* over text  */}
        </SwiperSlide>
      </Swiper>
      {/* over text  */}
      <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-7xl/relaxed font-semibold">Find Better, Together</p>
        <p className="text-lg opacity-80">
          Explore a wide range of product alternatives through the power of user
          recommendations. Whether you&apos;re looking for the best value or the
          perfect fit for your needs, our community helps you make informed
          decisions by sharing their experiences and insights.
        </p>
        <Link
          to={"/queries"}
          className="bg-primaryBtn mt-8 inline-block transform rounded-full border-none px-6 py-3 text-[17px] font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 active:font-semibold"
        >
          See All Queries
        </Link>
      </div>
    </div>
  );
}
