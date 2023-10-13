//import Next
import Link from 'next/link';


interface TextProps{
    size? : "xs" | "sm" | "md" | "lg" | "4xl";
    weight? : "bold" | "medium" | "light" | "normal" ;
    italic? : boolean;
    text : string | number;
    // fontFamily? : "EmotionalRescue" | "Inter";
    handWriting?: boolean;
    href? : string;
    className? : string;
    margin?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    marginX?: number;
    marginY?: number;
    }


function Text(props: TextProps){

    const { size, weight, italic, text, href, className, handWriting, margin, marginTop, marginBottom, marginLeft, marginRight, marginX, marginY} = props;
 

    const fontStyle = italic ? "italic" : "non-italic"; 

    const fontFamily = handWriting ? "EmotionalRescue" : "Inter";

    const marginClass = `m-${margin} mt-${marginTop || 0} mb-${marginBottom || 0} ml-${marginLeft || 0} mr-${marginRight || 0} mx-${marginX || 0} my-${marginY || 0}`;


    const pText = (
      <p className = {`
            text-${size} 
            font-${weight || "normal"} 
            ${fontStyle}
            font-[${fontFamily}]
            ${className}
            ${marginClass}
            `} 
          style ={{fontFamily}}> {text} </p>)

        // it doesnt get the margin text-size and font-light property.
        // Because tailwind does not process dynamic component.
          
    return(
        <div>
          { href ? (
            <Link href={href} target="_blank">
              { pText }           
            </Link>
          ) : ( pText )}
        </div>
    )
    


}

export default Text; 