"use client"

//Import React
import { useEffect, useState } from 'react';

import { FaArrowAltCircleUp, FaRegArrowAltCircleUp } from "react-icons/fa"

const ScrollToTopButton = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Kullanıcının sayfayı aşağı kaydırıp kaydırmadığını izlemek için bir scroll olay dinleyicisi ekleyin.
    window.addEventListener('scroll', () => {
      setIsVisible(window.scrollY > 300);
    });
  }, []);

  const scrollToTop = () => {
    // Yukarı git düğmesine tıkladığınızda sayfayı en üstüne kaydırın
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    // isVisible true olduğunda düğmeyi görüntüleyin
    isVisible && (
       <button className="fixed bottom-10 right-10 p-2 rounded-full bg-pink text-white" onClick={scrollToTop}>
       <FaArrowAltCircleUp/>
     </button>

    )
  );
};

export default ScrollToTopButton;