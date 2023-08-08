//Partials
import Header from "@/app/welcome/partials/Header";
import HomePageText from "@/app/welcome/partials/home-page-text";
import LeftImages from "@/app/welcome/partials/left-images";
import FourImages from "@/app/welcome/partials/four-images";
import LocationText from "./partials/location-text";

//Components
import Button from "../components/Button";

function HomePage() {
  return (
    // Header Text Image
    <div className="relative my-2 grid grid-cols-3 mb-28">
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
          <Button className="btnPink" width={200} height={40}>
            <p>Contact Us</p>
          </Button>
        </div>
        <div className="mt-14">
          <LocationText />
        </div>
      </div>
      {/* Header and Text Finish */}

      {/* Left Image Start */}
      <div className="col-span-1 relative ml-6">
        <LeftImages />
      </div>
      {/* Image Finish */}
    </div>

    //Header Text left Image finish
  );
}

export default HomePage;
