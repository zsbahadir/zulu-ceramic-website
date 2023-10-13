
//Import Components
import HeaderLine from "@/components/HeaderLine";

//Import Image
import instaLogo from "@/public/images/instaLogo.jpg";
import Navbar from "./Navbar";
import Card from "./Card";



function Header() {


  return (
    <div>
      <Card 
        src={instaLogo} 
        alt={"instaLogo"} 
        width={24} 
        height={24} 
        href="https://www.instagram.com/zuluceramics/"
        className="float-right mt-2"
        />
      <Navbar className="absolute mt-12 mx-20 flex justify-between w-1/2"/>
      <HeaderLine width = {1378} left={62} />      


    </div>
  );
};

export default Header;


