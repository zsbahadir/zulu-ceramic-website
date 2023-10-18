//import Next
import Link from "next/link";

//import components
import Card from "../../../components/card/Card";
import HeaderLine from "../../../components/layout/HeaderLine";



interface SectionProps {
    title: string;
    images: any;
    cols: number;
    gap: number;
    text_size: string;
    section?: string;
    id: number | string;
    target?: string;
    hasLine?: boolean;
};



function Section(props: SectionProps){

    const { title, images, cols, gap, id, text_size, target, hasLine } = props;

    return(
        <div>
            <HeaderLine hasLabel title={title} hasLine={hasLine}/>

            <div className="flex justify-center">
            <div className={`grid grid-cols-${cols} gap-${gap} w-3/4 m-20 place-items-center`}>
                {images.map((image: any) => (
                    <div key = {image.id} className = "m-8"> 
                        <Link href={`/shopping/${image.id}`} target={target}>
                            <Card
                                src={image.src}
                                alt={image.alt}
                                width={300} height={300}       
                                label={image.label}   
                                name={image.name}
                                price={image.price}  
                                text_size={text_size}
                            />
                        </Link>
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
};

export default Section;

