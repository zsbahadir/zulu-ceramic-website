//Import Components
import ImageContainer from "../components/ImageContainer";

//Import images
import large_img from "@/app/public/images/gallery-images/large_img.jpg";
import squareA from "@/app/public/images/gallery-images/squareA.jpg";
import squareB from "@/app/public/images/gallery-images/squareB.jpg";
import squareC from "@/app/public/images/gallery-images/squareC.jpg";
import squareD from "@/app/public/images/gallery-images/squareD.jpg";
import squareE from "@/app/public/images/gallery-images/squareE.jpg";
import squareF from "@/app/public/images/gallery-images/squareF.jpg";
import squareG from "@/app/public/images/gallery-images/squareG.jpg";
import squareH from "@/app/public/images/gallery-images/squareH.jpg";
import squareI from "@/app/public/images/gallery-images/squareI.jpg";
import squareJ from "@/app/public/images/gallery-images/squareJ.jpg";
import squareK from "@/app/public/images/gallery-images/squareK.jpg";
import squareL from "@/app/public/images/gallery-images/squareL.jpg";
import squareM from "@/app/public/images/gallery-images/squareM.jpg";
import squareN from "@/app/public/images/gallery-images/squareN.jpg";
import squareO from "@/app/public/images/gallery-images/squareO.jpg";
import squareP from "@/app/public/images/gallery-images/squareP.jpg";

import rightA from "@/app/public/images/gallery-images/rightA.jpg";
import rightB from "@/app/public/images/gallery-images/rightB.jpg";
import rightC from "@/app/public/images/gallery-images/rightC.jpg";

import bottomA from "@/app/public/images/gallery-images/bottomA.jpg";
import bottomB from "@/app/public/images/gallery-images/bottomB.jpg";
import bottomC from "@/app/public/images/gallery-images/bottomC.jpg";

function CollectionsPage() {
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

  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-start-1 col-span-5 w-auto mb-12 ml-4 opacity-90 hover:opacity-100">
        <ImageContainer src={large_img} alt="large-image" rounded />
      </div>

      {/* left squre images area */}
      <div className="col-start-1 col-end-5 w-auto relative opacity-90 ml-20">
        <div className="grid grid-cols-4 gap-8">
          {squareImages?.map((image) => {
            return (
              <div className="hover:scale-125">
                <ImageContainer
                  src={image?.src}
                  alt={image?.alt}
                  rounded
                  width={150.32}
                  height={150}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* right images area */}
      <div className="col-end-7 col-span-2 w-auto h-auto relative opacity-90">
        <div className="grid grid-cols-1 gap-12">
          {rightImages?.map((image) => {
            return (
              <div className="hover:scale-125">
                <ImageContainer
                  src={image?.src}
                  alt={image?.alt}
                  rounded
                  width={160}
                  height={200}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* bottom images area */}
      <div className="col-start-2 col-span-3 w-auto relative opacity-90">
        <div className="grid grid-cols-3 gap-8 mt-8">
          {bottomImages?.map((image) => {
            return (
              <div className="hover:scale-125">
                <ImageContainer
                  src={image?.src}
                  alt={image?.alt}
                  rounded
                  width={200}
                  height={150}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CollectionsPage;
