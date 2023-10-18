'use client'

//Partials
import Header from "@/components/layout/Header";
import HomePageText from "./partials/home-page-text";
import RightImages from "./partials/slider-images";
import FourImages from "./partials/four-images";
import LocationText from "./partials/location-text";

//Components
import Button from "@/components/cta/Button";
import SliderImages from "./partials/slider-images";


function HomePage() {

  //for going to contact us page when click the button
  const contactUsPagePath = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative grid grid-cols-3 mb-28 ">
      
      <div className="col-span-2"> 
        <Header homePage hasLine/>
        <HomePageText />
          <FourImages className="mt-20"/>

        <div className="flex justify-center my-20">
          <Button className="btnPink font-bold" 
          width={200} 
          height={40} 
          onClick={contactUsPagePath} 
          label={"Contact Us"}
          />
        </div>
          <LocationText />
      </div>

        <SliderImages className="col-span-1 relative ml-6"/>

    </div>

  );
}

export default HomePage;
