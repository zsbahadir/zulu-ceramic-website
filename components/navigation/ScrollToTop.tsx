"use client"

//Import React
import { useEffect, useState } from 'react';

import { FaArrowAltCircleUp } from "react-icons/fa"

const ScrollToTopButton = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to track whether the user scrolls down the page.
    window.addEventListener('scroll', () => {
      setIsVisible(window.scrollY > 300);
    });
  }, []);

  const scrollToTop = () => {
    // Scroll to the top of the page when you click the go up button
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    // Display button when isVisible is true
       <button className="fixed bottom-10 right-10 p-2 rounded-full bg-pink text-white" onClick={scrollToTop}
       style={{ display: isVisible ? 'block' : 'none' }}>
       <FaArrowAltCircleUp/>
     </button>
  );
};

export default ScrollToTopButton;

