//import Next
import Image from "next/image";
import Link from "next/link";
import Text from "../text/Text";



interface ImageContainerProps {
  src: string | any;
  alt: string;
  width: number;
  height: number;
  label?: string;
  name?: string;
  price?: number;
  text_size?: number | string;
  href?: string;
  className?: string;
}

function Card(props: ImageContainerProps) {
  //Destruct Props
  const { src, alt, width, height, label, price, text_size, name, href, className } = props;

  const imageComponent = (
    <Image
      src = {src}
      alt = {alt}
      className = {`rounded ${className || ''}`}
      width = {width}
      height = {height}
    />
  );

  return (
    <div className="">
      {href ? (
        <Link href = {href} target = "_blank">
          {imageComponent}
        </Link>
      ) : (imageComponent) }

      {label && <Text className={`flex justify-center mt-2 text-${text_size}`} text={label}/> }

      {name && price && (
      <div className={`flex justify-between mx-4 my-2 text-${text_size}`}>
      <Text text={name}/>
      <Text className="font-bold" text={`$ ${price}`}/>
      </div>
      )}
    </div>  
  );
}

export default Card;
