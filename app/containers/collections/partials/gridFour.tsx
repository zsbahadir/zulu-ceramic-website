//import React
import { ReactNode } from "react";

interface GridFourProps{
    children: ReactNode;
}

function GridFour( props:GridFourProps ){

    const { children } = props;
    return(
        <div className="col-start-2 col-span-3 w-auto relative opacity-90">
        <div className="grid grid-cols-3 gap-8 mt-8">
         {children}
        </div>
      </div>
    )
}

export default GridFour;