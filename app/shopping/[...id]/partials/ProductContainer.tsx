//import Next
import Image from "next/image";



//Import Icon
import { FaFacebookMessenger, FaInstagram,FaShoppingCart, FaWhatsapp } from "react-icons/fa";

//import Component
import Button from "../../../../components/cta/Button";
import Card from "../../../../components/card/Card";
import Text from "../../../../components/text/Text";

interface ProductContainerProps{
    images: any,
    selectedImage: any;
};


function ProductContainer( props: ProductContainerProps ){

    const { images, selectedImage } = props;

   return (
    <div className="flex justify-center mt-56">
    <div>
        <div className=" flex justify-center m-4">
        <Card src={selectedImage?.src} alt={selectedImage?.alt} width={300} height={300}/>
        </div>
    
    <div className="flex">
        {images?.map((image: any) => (
                    <div key = {image.id} className = "flex justify-center m-4"> 
                            <Card
                            src={image.src}
                            alt={image.alt}
                            width={50} 
                            height={50}
                            />
                            </div>
       )
       )}
       </div>
       <div className="grid grid-cols-1 gap-8 place-items-center mt-16">
       <div className="grid grid-cols-1 gap-4 place-items-center">
       <div><span>{selectedImage?.type}</span> / <span>{selectedImage?.productName}</span> </div>
       {/* <Text text={selectedImage.type}/> */}
       {/* <div><span>Espresso Cup</span> / <span>Orange</span> </div> */}
       <div><span className="font-bold text-lg">$ 24</span></div>
       </div>
       <Button className= "font-bold btnPink" 
       width = {150} 
       height = {30}
       label = "Add to Cart"
       icon={<FaShoppingCart/>}
       />
       <div className="flex justify-evenly text-sm w-full">
        <span>Special Technique</span>
        <span>Handmade</span>
        <span>Unique Production</span>
       </div>
       <div className="grid grid-cols-1 gap-2 place-items-center"> 
        <span className="text-xs">Share</span> 
        <div className="flex justify-evenly w-28">
        <FaWhatsapp/>
        <FaFacebookMessenger/>
        <FaInstagram/>
        </div>
       </div>
       </div>
       </div>
    </div>
   )
}

export default ProductContainer;