//import Next
import Image from "next/image";
import Link from "next/link";



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
    <div>
      {href ? (
        <Link href = {href} target = "_blank">
          {imageComponent}
        </Link>
      ) : (imageComponent) }

      {label && <span className='text-center mt-2 text-lg'>{label}</span> }

      {name && price && (
      <div className={`flex justify-between w-1/2 m-2 ml-4 text-${text_size}`}>
      <span className="italic">{name}</span>
      <span className="font-bold">${price}</span>
      </div>
      )}
    </div>  
  );
}

export default Card;
