import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSlider = () => {
  const slides = [
    " https://images.unsplash.com/photo-1591920689160-ee83654e464a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxjYXJ8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1676754568744-7852efc67c40?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzbGElMjBtb2RlbCUyMHl8ZW58MHx8MHx8fDA%3D",
    "https://media.istockphoto.com/id/970028668/photo/3d-illustration-of-generic-compact-red-suv.webp?a=1&b=1&s=612x612&w=0&k=20&c=9T5cQ0Wc4jXkY-3l2kKyS8NtaJONlLn9PD_xIQfdx4U=",
    "https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.webp?a=1&b=1&s=612x612&w=0&k=20&c=ItI0Ytk3vS_4cPMbXNfxPD148T68tB73sZNquefJnnY="
  ];

  return (
    <div className="w-300 h-96">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={1}          // Show only one slide at a time
        spaceBetween={0}     
          infinite={true}       // No overlap
        pagination={{ clickable: true }}
        //navigation                  // Show arrows
        autoplay={{ delay: 3000,  }}
        loop={true}
        className="h-full"
      >
        {slides.map((url, index) => (
          <SwiperSlide
  key={index}
  className="h-full w-full flex items-center justify-center overflow-hidden"
>
  <img
  src={url}
  alt={`Slide ${index + 1}`}
  className="
    w-full        /* Full width of parent */
    h-full        /* Full height of parent */
    object-cover  /* Cover parent while maintaining aspect ratio */
    rounded-xl    /* Optional: rounded corners */
    shadow-md     /* Optional: shadow */
    overflow-hidden
  "
/>

</SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
