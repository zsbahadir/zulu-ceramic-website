
//import Images
import imageA from "@/public/images/imageA.jpg";
import imageB from "@/public/images/imageB.jpg";
import imageC from "@/public/images/imageC.jpg";
import imageD from "@/public/images/imageD.jpeg";


//Components
import ImagesMapping from "@/components/ImagesMapping";

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

interface FourImagesProps{
  className: string;
}

function FourImages(props: FourImagesProps ) {

  const { className } = props;

  return (
      <div className="flex justify-evenly">
        <ImagesMapping images={images} width={167} height={167} className="mt-20"/>
      </div>
  );
}

export default FourImages;
