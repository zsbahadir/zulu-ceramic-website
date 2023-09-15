'use client'

//Partials
import Header from "@/components/Header";
import HomePageText from "./partials/home-page-text";
import RightImages from "./partials/right-images";
import FourImages from "./partials/four-images";
import LocationText from "./partials/location-text";

//Components
import Button from "@/components/Button";


function HomePage() {

  //for Contact Button on the page

  const contactUsPagePath = () => {
    // Yukarı git düğmesine tıkladığınızda sayfayı en üstüne kaydırın
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    // Header Text Image
    <div className="relative grid grid-cols-3 mb-28">
      {/* Header and Text start */}
      <div className=" col-span-2">
        
        {/* Navbar start */}
        <Header />
        {/* Navbar-finish */}

        {/* Text-start */}
        <HomePageText />
        {/* Text-finish */}

        <div className="mt-20">
          <FourImages />
        </div>
        <div className="flex justify-center mt-20">
          <Button className="btnPink" width={200} height={40} onClick={contactUsPagePath}>
            <span className="font-bold">Contact Us</span>
          </Button>
        </div>
        <div className="mt-10">
          <LocationText />
        </div>
      </div>
      {/* Header and Text Finish */}

      {/* Left Image Start */}
      <div className="col-span-1 relative ml-6">
        <RightImages />
      </div>
      {/* Image Finish */}
    </div>

    //Header Text left Image finish
  );
}

export default HomePage;
