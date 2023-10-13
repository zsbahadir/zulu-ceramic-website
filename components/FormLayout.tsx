//import React
import { ReactNode } from "react";

import Text from "./Text";
import Button from "./Button";

interface FormLayoutProps{
    children: ReactNode;
    formTitle?: string;
    titleClassName?: string;
    buttonClassname?: string;
    buttonWidth: number;
    buttonHeight: number;
    buttonLabel: string;
}




function FormLayout( props: FormLayoutProps ){

    const { children, formTitle, titleClassName, buttonClassname, buttonWidth, buttonHeight, buttonLabel } = props;

    
    return(
        <div className="flex w-[280px]">
            <div className=" w-full bg-neutral-200 shadow-inner backdrop-blur-[15.40px] grid place-items-center">

                <div className="m-2 text-center w-full h-full inline-grid place-content-center flex-col space-y-6">

                { formTitle && <Text text={formTitle} className={titleClassName}/>  }

                {children}

                <Button className={buttonClassname} width={buttonWidth} height={buttonHeight} label={buttonLabel}/>
            
                </div>
                
            </div>
        </div>
    )
}

export default FormLayout;