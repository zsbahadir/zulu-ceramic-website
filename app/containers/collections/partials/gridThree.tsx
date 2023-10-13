//import React
import { ReactNode } from "react";

interface GridThreeProps{
    children: ReactNode;
}

function GridThree( props:GridThreeProps ){

    const { children } = props;
    return(
        <div className="col-end-7 col-span-2 w-auto h-auto relative opacity-90">
        <div className="grid grid-cols-1 gap-12">
         {children}
        </div>
      </div>
    )
}

export default GridThree;