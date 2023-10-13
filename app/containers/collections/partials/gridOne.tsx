//import React
import { ReactNode } from "react";

interface GridOneProps{
    children: ReactNode;
}

function GridOne( props:GridOneProps ){

    const { children } = props;
    return(
        <div className="col-start-1 col-span-5 w-auto mb-12 ml-4 opacity-90 hover:opacity-100">
        {children}
      </div>
    )
}

export default GridOne;