"use client";

//import React-Next
import { useState, useEffect, Key } from "react";

//import Icon
import { FaSquare } from "react-icons/fa";

interface SlideProps{
    slides: any;
    currentSlide: any;
    setCurrentSlide: ( slideIndex : number ) => void;
}

function Slide( props:SlideProps ){

    const { slides, currentSlide, setCurrentSlide } = props;

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
        <div className="flex absolute top-[90%] left-[40%] cursor-pointer">
        {slides.map((slide: any, slideIndex: Key | null | undefined) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="px-2 justify-center text-gray-300 transition duration-150 ease-in-out"
          >
            <FaSquare size={10} />
          </div>
        ))}
      </div>
    )
}

export default Slide;





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