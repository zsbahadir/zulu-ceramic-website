
//Import Icons 
import { FaInstagram} from "react-icons/fa";

//Import Components
import HeaderLine from "@/components/layout/HeaderLine";
import Navbar from "../navigation/Navbar";
import Text from "../text/Text";
import BottomFooterText from "../text/BottomFooterText";


function Footer() {
  return (
    <div>

      <div className="flex justify-center">
        <Navbar homePage isFooter icon={<FaInstagram className="w-6 h-6"/>} className="absolute flex mt-12"/>
        </div>
        
      <HeaderLine hasLine hasLabel={false} title={""}  /> 

        <BottomFooterText 
        leftContent={<Text text = "© 2023, Zulu Ceramic Powered by Zebi"/>} 
        
        rightContent={
        <>
        <Text text = "Terms & Conditions"/>
        <Text text = "Privacy Policy"/>
        </>}        
        />


    </div>
  )
}

export default Footer;
