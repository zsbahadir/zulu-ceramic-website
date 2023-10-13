//Import Next
import Link from "next/link";

//Import Icons 
import { FaInstagram} from "react-icons/fa";

//Import Components
import HeaderLine from "@/components/HeaderLine";
import Navbar from "./Navbar";
import Text from "./Text";
import BottomFooterText from "./BottomFooterText";
import Button from "./Button";


function Footer() {
  return (
    <div>

      <div className="flex justify-center">
        <Navbar isFooter icon={<FaInstagram className="w-6 h-6"/>} className="absolute flex mt-12" />
        </div>
        
      <HeaderLine width={900} left={0}  /> 

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
