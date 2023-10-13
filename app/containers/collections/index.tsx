
//Import images
import large_img from "@/public/images/gallery-images/large_img.jpg";
import squareA from "@/public/images/gallery-images/squareA.jpg";
import squareB from "@/public/images/gallery-images/squareB.jpg";
import squareC from "@/public/images/gallery-images/squareC.jpg";
import squareD from "@/public/images/gallery-images/squareD.jpg";
import squareE from "@/public/images/gallery-images/squareE.jpg";
import squareF from "@/public/images/gallery-images/squareF.jpg";
import squareG from "@/public/images/gallery-images/squareG.jpg";
import squareH from "@/public/images/gallery-images/squareH.jpg";
import squareI from "@/public/images/gallery-images/squareI.jpg";
import squareJ from "@/public/images/gallery-images/squareJ.jpg";
import squareK from "@/public/images/gallery-images/squareK.jpg";
import squareL from "@/public/images/gallery-images/squareL.jpg";
import squareM from "@/public/images/gallery-images/squareM.jpg";
import squareN from "@/public/images/gallery-images/squareN.jpg";
import squareO from "@/public/images/gallery-images/squareO.jpg";
import squareP from "@/public/images/gallery-images/squareP.jpg";

import rightA from "@/public/images/gallery-images/rightA.jpg";
import rightB from "@/public/images/gallery-images/rightB.jpg";
import rightC from "@/public/images/gallery-images/rightC.jpg";

import bottomA from "@/public/images/gallery-images/bottomA.jpg";
import bottomB from "@/public/images/gallery-images/bottomB.jpg";
import bottomC from "@/public/images/gallery-images/bottomC.jpg";


import Card from "@/components/Card";


import GridOne from "./partials/gridOne";
import GridTwo from "./partials/gridTwo";
import GridBase from "./partials/gridBase";
import GridThree from "./partials/gridThree";
import GridFour from "./partials/gridFour";
import ImagesMapping from "@/components/ImagesMapping";



const squareImages = [
  {
    src: squareA,
    alt: "squareA_Img",
  },
  {
    src: squareB,
    alt: "squareB_Img",
  },
  {
    src: squareC,
    alt: "squareC_Img",
  },
  {
    src: squareD,
    alt: "squareD_Img",
  },
  {
    src: squareE,
    alt: "squareE_Img",
  },
  {
    src: squareF,
    alt: "squareF_Img",
  },
  {
    src: squareG,
    alt: "squareG_Img",
  },
  {
    src: squareH,
    alt: "squareH_Img",
  },
  {
    src: squareI,
    alt: "squareI_Img",
  },
  {
    src: squareJ,
    alt: "squareJ_Img",
  },
  {
    src: squareK,
    alt: "squareK_Img",
  },
  {
    src: squareL,
    alt: "squareL_Img",
  },
  {
    src: squareM,
    alt: "squareM_Img",
  },
  {
    src: squareN,
    alt: "squareN_Img",
  },
  {
    src: squareO,
    alt: "squareO_Img",
  },
  {
    src: squareP,
    alt: "squareP_Img",
  },
];

const rightImages = [
  {
    src: rightA,
    alt: "RightA_Img",
  },
  {
    src: rightB,
    alt: "RightB_Img",
  },
  {
    src: rightC,
    alt: "RightC_Img",
  },
];

const bottomImages = [
  {
    src: bottomA,
    alt: "BottomA_Img",
  },
  {
    src: bottomB,
    alt: "BottomB_Img",
  },
  {
    src: bottomC,
    alt: "BottomC_Img",
  },
];



function Collections() {
  


  return (
   <GridBase>

          <GridOne><Card src={large_img} alt="large-image" width={1446} height={373} /></GridOne>

      {/* left squre images area */}
          <GridTwo>
            <ImagesMapping images={squareImages} width={150} height={150} className={"hover:scale-125"}/>
          </GridTwo>

      {/* right images area */}
          <GridThree> 
            <ImagesMapping images={rightImages} width={160} height={200} className={"hover:scale-125"}/>
          </GridThree>

      {/* bottom images area */}
          <GridFour>
            <ImagesMapping images={bottomImages} width={200} height={150} className={"hover:scale-125"}/>
          </GridFour>
      </GridBase>
  );
}

export default Collections;
