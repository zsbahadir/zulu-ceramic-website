//import React
import { ReactNode } from "react";

interface GridTwoProps{
    children: ReactNode;
}

function GridTwo( props:GridTwoProps ){

    const { children } = props;
    return(
         <div className="col-start-1 col-end-5 w-auto relative opacity-90 ml-20">
        <div className="grid grid-cols-4 gap-8">
          {children}
        </div>
      </div>
    )
}

export default GridTwo;