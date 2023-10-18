//import Components
import { ReactNode } from 'react';


interface BottomFooterTextProps{
    leftContent?: ReactNode;
    rightContent?: ReactNode;
    middleContent?: ReactNode;
}


function BottomFooterText( props: BottomFooterTextProps ){

    const { leftContent, rightContent, middleContent } = props;

    
    return(
        <div className="flex justify-between text-sm my-2 mx-6 text-gray-400">

            {leftContent}

        <div>
            {middleContent}
        </div>

        <div className="w-1/5 flex justify-between">
            {rightContent}
        </div>

        </div>
    )
}

export default BottomFooterText;


  {/* <div className=" flex justify-between text-sm my-2 mx-6 text-gray-400">
        <span>© 2023, Zulu Ceramic Powered by Zebi</span>
        <span className=" w-1/5 flex justify-between">
          Terms & Conditions <span>Privacy Policy</span>
        </span>
      </div> */}