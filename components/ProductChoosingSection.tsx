//Import Next
import Image from "next/image";
import Link from "next/link";


interface ProductImage {
    id: string;
    src: string;
    alt: string;
    productName?: string;
    price?: number;

  }


interface ProductChoosingSectionProps {
    title: string;
    images: any;
};



function ProductChoosingSection(props: ProductChoosingSectionProps){

    const { title, images } = props;


    return(
        <div>
            <div >
                <h3 className="ml-16 mb-2">{title}</h3>
                <div className={`left-[62px] right-[62px] absolute border border-pink  opacity-60 self-end`}></div>
            </div>

            <div className = "flex justify-center">
            <div className = "grid grid-cols-2 gap-3 align-center w-3/4 m-20">
                {images.map((image: any) => (
                    <div key = {image.id} className = "flex justify-center"> 
                        <Link href={`/product/${image.id}`}>
                            <Image
                             src = {image.src}
                             alt = {image.alt}
                             width={280}
                            className="rounded"
                            />
                            <div className="flex justify-center m-2 ml-4 text-lg">
                                <span className="">{image.productName}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
};

export default ProductChoosingSection;

