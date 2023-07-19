
//import Images
import imageA from "@/app/public/images/imageA.jpg";
import imageB from "@/app/public/images/imageB.jpg";
import imageC from "@/app/public/images/imageC.jpg";
import imageD from "@/app/public/images/imageD.jpeg";

//Components
import ImageContainer from "@/app/components/ImageContainer";

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
              <ImageContainer src={image?.src} alt={image?.alt} width={167}
              height={167} rounded  />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FourImages;
