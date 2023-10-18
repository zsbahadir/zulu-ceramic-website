import Card from "../card/Card";

interface ImagesMappingProps{
    images: any;
    width: number;
    height: number;
    className?: string;
}



function ImagesMapping (props: ImagesMappingProps){

    const { images, width, height, className } = props; 
    
    return (
        <>  
        {images?.map((image: { src: any; alt: string; }) => {
            return (
              <div className={className}>
                <Card
                  src={image?.src}
                  alt={image?.alt}
                  width={width}
                  height={height}
                />
              </div>
            );
          })}
          </>
    )
}

export default ImagesMapping;