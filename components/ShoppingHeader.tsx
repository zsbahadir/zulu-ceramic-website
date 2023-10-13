//import Next
import Image from "next/image";
import Link from "next/link";

//import Images
import trademark from "@/public/images/trademark.png";

//import Icons
import { FaExclamation, FaShoppingBasket} from "react-icons/fa";
import HeaderLine from "./HeaderLine";


interface ShoppingHeaderProps {
    name: string;
}


function ShoppingHeader (props : ShoppingHeaderProps) {

    const { name } = props;
    
    return (
        <div className="flex justify-between">
             {/* Navbar */}
      <nav className="flex sm:justify-center px-3 py-2 mx-32 mt-12 absolute">
        {[
          ["New Release", "newRealese"],
          ["Cups", "cups"],
          ["Ornaments", "ornaments"],
          ["Plates", "plates"],
          ["Outlet", "outlet"]
        ].map(([title, id]) => (
          <Link href={`#${id}`} className="mx-20  text-slate-700 font-medium">
            <div className="flex items-bottom">
            {title === "New Release" && <FaExclamation fill="#D7648A" className="mb-4"  />}
            {title}
            </div>
          </Link>
        ))}
      </nav>
      <HeaderLine width={0} left={0} />
            <div className="flex justify-evenly w-52 items-center">
                <span className="italic text-sm">Welcome <span className="font-bold">{name}</span></span>
            <FaShoppingBasket size={22} fill="#D7648A"/>
            </div>
        </div>
    )
}

export default ShoppingHeader;