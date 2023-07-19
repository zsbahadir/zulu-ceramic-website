import Image from 'next/image';

interface ImageContainerProps {
  src: string | any;
  alt: string;
  className?: string | undefined;
  width?: number;
  height?: number;
  rounded?: boolean;
}

function ImageContainer ( props: ImageContainerProps ) {

    //Destruct Props
    const { src, alt, width, height, rounded } = props;

  return (
    <div className="flex flex-col items-center">
      <Image src={src} alt={alt} className={`object-cover ${rounded ? 'rounded' : ''}` }  width={width} height={height}/>
    </div>
  );
};

export default ImageContainer;



// className?: string | undefined;  
//     className = ' ',

// className={
//     status
//       ? `btn-${status} ${className} ${sizes} 
//     margin_right_${marginright} margin_left_${marginleft} margin_top_${margintop} margin_bottom_${marginbottom}`
//       : `${className} 
//     margin_right_${marginright} margin_left_${marginleft} margin_top_${margintop} margin_bottom_${marginbottom}`
//   }