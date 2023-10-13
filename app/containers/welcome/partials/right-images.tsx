"use client";

//import React
import { useState } from "react";

//import components
import Card from "@/components/Card";
import Slide from "@/components/Slide";

//Import Images
import carouselA from "@/public/images/carouselA.png";
import carouselB from "@/public/images/carouselB.png";
import carouselC from "@/public/images/carouselC.png";
import carouselD from "@/public/images/carouselD.png";



  //slide images
  const slides = [
    {
      src: carouselA,
      alt: "Firts carousel image",
    },
    {
      src: carouselB,
      alt: "Second carousel image",
    },
    {
      src: carouselC,
      alt: "Third carousel image",
    },
    {
      src: carouselD,
      alt: "Fourth carousel image",
    },
  ];

  interface RightImagesProps{
    className?: string;
  }


  function RightImages( props: RightImagesProps ) {

    const { className } = props;

    const [currentSlide, setCurrentSlide] = useState(0);


  return (
    <div className={className}>
        <Card
          src={slides[currentSlide].src}
          alt="first-carousel-image"
          width={550}
          height={982}
        />
        <Slide slides={slides} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}/>
    </div>
  );
}

export default RightImages;
