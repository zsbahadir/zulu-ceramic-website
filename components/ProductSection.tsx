//Import Next
import Link from "next/link";
import Card from "./Card";
import ShopHeaderLine from "./ShopHeaderLine";



interface ProductSectionProps {
    title: string;
    images: any;
    cols: number;
    gap: number;
    text_size: string;
    section?: string;
    id: number | string;
};



function ProductSection(props: ProductSectionProps){

    const { title, images, cols, gap, id } = props;

    return(
        <div>
                <ShopHeaderLine title= {title}/>

            <div className="flex justify-center">
            <div className={`grid grid-cols-${cols} gap-${gap} w-3/4 m-20`}>
                {images.map((image: any) => (
                    <div key = {image.id} className = "m-8"> 
                        <Link href={`/shopping/${image.id}`}>
                            <Card
                                src={image.src}
                                alt={image.alt}
                                width={300} height={300}       
                                label={image.label}   
                                name={image.name}
                                price={image.price}  
                            />
                        </Link>
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
};

export default ProductSection;

