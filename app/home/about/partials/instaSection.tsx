//import Component
import AutoSlider from "@/components/slider/AutoSlider";

//import Photos
import instA from "@/public/images/instagram-images/instA.svg";
import instB from "@/public/images/instagram-images/instB.jpeg";
import instC from "@/public/images/instagram-images/instC.jpeg";
import instD from "@/public/images/instagram-images/instD.jpeg";
import instE from "@/public/images/instagram-images/instE.jpeg";
import instF from "@/public/images/instagram-images/instF.jpeg";
import instG from "@/public/images/instagram-images/instG.jpeg";
import instH from "@/public/images/instagram-images/instH.jpeg";
import instI from "@/public/images/instagram-images/instI.jpeg";
import instJ from "@/public/images/instagram-images/instJ.jpeg";
import instK from "@/public/images/instagram-images/instK.jpeg";
import instL from "@/public/images/instagram-images/instL.jpeg";
import instM from "@/public/images/instagram-images/instM.jpeg";
import instN from "@/public/images/instagram-images/instN.jpeg";
import instO from "@/public/images/instagram-images/instO.jpeg";
import instP from "@/public/images/instagram-images/instP.jpeg";
import instQ from "@/public/images/instagram-images/instQ.jpeg";
import instR from "@/public/images/instagram-images/instR.jpeg";


const instaImages = [
  instA,
  instB,
  instC,
  instD,
  instE,
  instF,
  instG,
  instH,
  instI,
  instJ,
  instK,
  instL,
  instM,
  instN,
  instO,
  instP,
  instQ,
  instR,
];

interface AboutSectionProps{
  className?: string;
}


function InstaSection(props: AboutSectionProps) {
 
  const { className } = props;

  return (
    <div className="w-screen flex justify-center">
      <div className="w-3/5">
        <AutoSlider images={instaImages} slidesPerView={4} spaceBetween={4} />
      </div>
    </div>
  );
}

export default InstaSection;
