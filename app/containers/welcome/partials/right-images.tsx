"use client";

//Import React-Next
import { useState, useEffect } from "react";

//Import Next
import Image from "next/image";

//Import Icons
import { FaSquare } from "react-icons/fa";

//Import Images
import carouselA from "@/public/images/carouselA.png";
import carouselB from "@/public/images/carouselB.png";
import carouselC from "@/public/images/carouselC.png";
import carouselD from "@/public/images/carouselD.png";


function RightImages() {
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

  //Slide Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);

  //Right-Left Change Slides Func.
  // const prevSlide = () => {
  //   const isFirstSlide = currentSlide === 0;
  //   const newSlide = isFirstSlide ? slides.length - 1 : currentSlide - 1;
  //   setCurrentSlide(newSlide);
  // };

  // const nextSlide = () => {
  //   const isLastSlide = currentSlide === slides.length - 1;
  //   const newSlide = isLastSlide ? 0 : currentSlide + 1;
  //   setCurrentSlide(newSlide);
  // };

  const goToSlide = (slideIndex: any) => {
    setCurrentSlide(slideIndex);
  };

  //AutoSlide Interval Time
  const autoSlideInterval = 3000;

  useEffect(() => {
    //Set Interval
    const autoSlideTimer = setInterval(() => {
      //Define slide
      const isLastSlide = currentSlide === slides.length - 1;
      const newSlide = isLastSlide ? 0 : currentSlide + 1;
      setCurrentSlide(newSlide);
    }, autoSlideInterval);
    return () => clearInterval(autoSlideTimer);
  }, [currentSlide]);

  return (
    <div className="flex relative">
      <div>
        <Image
          src={slides[currentSlide].src}
          alt="first-carousel-image"
        />
      </div>
      <div className="flex absolute top-[90%] left-[40%] cursor-pointer">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="px-2 justify-center text-gray-300 transition duration-150 ease-in-out"
          >
            <FaSquare size={10} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightImages;
