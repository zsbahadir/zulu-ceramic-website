import { ReactNode } from "react";

interface TooltipProps {
    children: ReactNode;
    content: string | number;
}
function Tooltip(props: TooltipProps) {

    //Destruct Props
    const { children, content} = props;

  return (
    <div className="relative inline-block">
        {children}
        <div  className="hidden group-hover:block bg-black text-white text-sm py-1 px-2 rounded absolute top-0 left-0 -mt-10">
            {content}
        </div>
    </div>
  )
}

export default Tooltip;
