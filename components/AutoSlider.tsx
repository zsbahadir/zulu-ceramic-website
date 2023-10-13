"use client";

//Import Next
import Image from "next/image";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";



type SwiperProps = React.HTMLAttributes<HTMLDivElement> & {
  modules?: SwiperModule[] | any[]; // modules özelliğini ekledik
  spaceBetween?: number;
  slidesPerView?: number;
  autoplay?: boolean | { delay: number; disableOnInteraction?: boolean };
  navigation?: boolean;
  pagination?: { clickable?: boolean };
  width?: number;
  height?: number;
};

interface SwiperModule {
  // Import Swiper modules here
}

interface AutoSliderProps {
  images: any;
  spaceBetween?: number;
  slidesPerView: number;
  autoplay?: boolean;
  width?: number;
  height?: number;
  clickable?: boolean | undefined;
}

function AutoSlider( props: AutoSliderProps ) {

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
