//import Icons
import { FaShoppingBasket} from "react-icons/fa";

interface AuthNameTextProps{
    name: string;
    className: string;
}

function AuthNameText( props: AuthNameTextProps ){

    const { name, className } = props;
    return (
    <div className ={className} >
        <div className="flex justify-evenly w-52 items-center">
        <span className="italic text-sm">Welcome <span className="font-bold">{name}</span></span>
    <FaShoppingBasket size={22} fill="#D7648A"/>
    </div>
    </div>
    )
}

export default AuthNameText