//import React
import { ReactNode } from "react";


import Card from "@/components/card/Card";



interface ContactPageLayoutProps{
    children: ReactNode;
    bgImage: any;
    bgWidth: number;
    bgHeight?: number;
    
}

function ContactPageLayout( props: ContactPageLayoutProps ){

    const { bgImage, children, bgWidth } = props; 
    return (
        <div className="flex relative justify-center items-center mt-20">
        <Card
          src= {bgImage.src}
          alt= {bgImage.alt}
          width= {bgWidth} 
          height= {0}      
          />
  
        <div className=" flex absolute">
          {children}
      </div>
      </div>
    )
}
export default ContactPageLayout;

