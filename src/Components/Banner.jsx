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
    <div className="container relative mx-auto text-white sm:w-max md:max-w-[720px] lg:max-w-[970px] xl:max-w-[1200px]">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectFade, Autoplay]}
        className="mySwiper aspect-[11/8] max-w-[1400px] rounded-md text-white sm:aspect-[11/6.7] sm:rounded-lg md:aspect-[11/5.6] lg:aspect-[11/4.8] lg:rounded-xl xl:aspect-[11/4.8]"
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
      <div className="absolute left-1/2 top-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 px-5 text-center sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl">
        <p className="text-[27px] font-semibold sm:text-3xl md:text-4xl lg:text-5xl lg:font-medium xl:text-7xl/relaxed">
          Find Better, Together
        </p>
        <p className="mt-2 text-xs opacity-80 sm:mt-3 sm:text-sm md:mt-4 md:text-sm lg:mt-5 lg:text-base xl:text-lg">
          Explore a wide range of product alternatives through the power of user
          recommendations. Whether you&apos;re looking for the best value or the
          perfect fit for your needs, our community helps you make informed
          decisions by sharing their experiences and insights.
        </p>
        <Link
          to={"/queries"}
          className="mt-3 inline-block transform rounded-full border-none bg-primaryBtn px-5 py-2 text-[17px] text-base font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 active:font-semibold sm:mt-4 md:px-6 md:py-3 md:text-[17px] lg:mt-5 xl:mt-8 xl:px-6 xl:py-3"
        >
          See All Queries
        </Link>
      </div>
    </div>
  );
}
