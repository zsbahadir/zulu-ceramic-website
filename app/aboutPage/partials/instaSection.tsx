//import Component
import AutoSlider from "@/app/components/AutoSlider";

//import Photos
import instA from "@/app/public/images/instagram-images/instA.svg";
import instB from "@/app/public/images/instagram-images/instB.jpeg";
import instC from "@/app/public/images/instagram-images/instC.jpeg";
import instD from "@/app/public/images/instagram-images/instD.jpeg";
import instE from "@/app/public/images/instagram-images/instE.jpeg";
import instF from "@/app/public/images/instagram-images/instF.jpeg";
import instG from "@/app/public/images/instagram-images/instG.jpeg";
import instH from "@/app/public/images/instagram-images/instH.jpeg";
import instI from "@/app/public/images/instagram-images/instI.jpeg";
import instJ from "@/app/public/images/instagram-images/instJ.jpeg";
import instK from "@/app/public/images/instagram-images/instK.jpeg";
import instL from "@/app/public/images/instagram-images/instL.jpeg";
import instM from "@/app/public/images/instagram-images/instM.jpeg";
import instN from "@/app/public/images/instagram-images/instN.jpeg";
import instO from "@/app/public/images/instagram-images/instO.jpeg";
import instP from "@/app/public/images/instagram-images/instP.jpeg";
import instQ from "@/app/public/images/instagram-images/instQ.jpeg";
import instR from "@/app/public/images/instagram-images/instR.jpeg";

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
