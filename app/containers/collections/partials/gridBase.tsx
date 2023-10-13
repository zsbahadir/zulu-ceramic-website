//import React
import { ReactNode } from "react";

interface GridBaseProps{
    children: ReactNode;
}

function GridBase( props:GridBaseProps ){

    const { children } = props;
    return(
        <div className="grid grid-cols-5 gap-4">
        {children}
      </div>
    )
}

export default GridBase;