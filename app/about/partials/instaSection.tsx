
//import Component
import AutoSlider from "@/app/components/AutoSlider";

//import Photos
import instA from "@/app/public/images/instagram-pictures/instA.svg";
import instB from "@/app/public/images/instagram-pictures/instB.jpeg";
import instC from "@/app/public/images/instagram-pictures/instC.jpeg";
import instD from "@/app/public/images/instagram-pictures/instD.jpeg";
import instE from "@/app/public/images/instagram-pictures/instE.jpeg";
import instF from "@/app/public/images/instagram-pictures/instF.jpeg";
import instG from "@/app/public/images/instagram-pictures/instG.jpeg";
import instH from "@/app/public/images/instagram-pictures/instH.jpeg";
import instI from "@/app/public/images/instagram-pictures/instI.jpeg";
import instJ from "@/app/public/images/instagram-pictures/instJ.jpeg";
import instK from "@/app/public/images/instagram-pictures/instK.jpeg";
import instL from "@/app/public/images/instagram-pictures/instL.jpeg";
import instM from "@/app/public/images/instagram-pictures/instM.jpeg";
import instN from "@/app/public/images/instagram-pictures/instN.jpeg";
import instO from "@/app/public/images/instagram-pictures/instO.jpeg";
import instP from "@/app/public/images/instagram-pictures/instP.jpeg";
import instQ from "@/app/public/images/instagram-pictures/instQ.jpeg";
import instR from "@/app/public/images/instagram-pictures/instR.jpeg";

function InstaSection() {
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

  return (
    <div className="w-screen flex justify-center">
      <div className="w-3/5">
      <AutoSlider images={instaImages} slidesPerView={4} spaceBetween={4} />
      </div>
    </div>
  );
}

export default InstaSection;
