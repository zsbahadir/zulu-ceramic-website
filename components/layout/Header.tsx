
//Import Components
import HeaderLine from "@/components/layout/HeaderLine";

//Import Image
import instaLogo from "@/public/images/instaLogo.jpg";
import Navbar from "../navigation/Navbar";
import Card from "../card/Card";
import AuthNameText from "../auth/AuthNameText";


interface HeaderProps{
  homePage: boolean;
  hasLine: boolean
}

function Header(props: HeaderProps) {

  const { homePage, hasLine } = props;

//<FaExclamation fill="#D7648A" className="mb-4"  />

  return (
    <div>
      {homePage 
      ?
      (
        <div>
        <Card 
        src={instaLogo} 
        alt={"instaLogo"} 
        width={24} 
        height={24} 
        href="https://www.instagram.com/zuluceramics/"
        className="float-right mt-2"
        />
        </div>
      ):
      <AuthNameText name="Zeynep" className="float-right mr-16"/>
      }
     
      <Navbar className="absolute mt-12 mx-20 flex justify-between w-1/2" {...props}/>
      <HeaderLine hasLine={hasLine} hasLabel={false} title={""}/>      

    </div>
  );
};

export default Header;


