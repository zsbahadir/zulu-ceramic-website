'use client';

//Import Next
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

interface AutoSliderProps {
  images: any;
  spaceBetween?: number;
  slidesPerView: number;
  autoplay?: boolean;
  width?: number;
  height?: number;
  clickable?: boolean | undefined;
}

function AutoSlider(props: AutoSliderProps) {
  const { images, spaceBetween, slidesPerView, width, height, clickable } = props;

  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable,
        }}
        width={width}
        height={height}
      >
        {images.map((image: any, index: number) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              height={120}
              width={150}
              className="ml-4"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default AutoSlider;
