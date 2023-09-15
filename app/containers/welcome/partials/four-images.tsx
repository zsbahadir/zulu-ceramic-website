//Import Next
import Image from "next/image";

//import Images
import imageA from "@/public/images/imageA.jpg";
import imageB from "@/public/images/imageB.jpg";
import imageC from "@/public/images/imageC.jpg";
import imageD from "@/public/images/imageD.jpeg";

//Components
import ImageContainer from "@/components/ImageContainer";

function FourImages() {
  const images = [
    {
      src: imageA,
      alt: "Firts image for homepage",
    },
    {
      src: imageB,
      alt: "Second image for homepage",
    },
    {
      src: imageC,
      alt: "Third image from homepage",
    },
    {
      src: imageD,
      alt: "Fourth image from homepage",
    },
  ];

  return (
    <>
      <div className="flex justify-evenly">
        {images?.map((image: any) => {
          return (
            <div>
              <Image
                src={image?.src}
                alt={image?.alt}
                width={167}
                height={167}
                className="rounded"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FourImages;
