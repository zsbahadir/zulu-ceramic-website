//import Components
import Text from "./Text";



interface NavbarProps{
    className? : string;
    icon?: any;
    isFooter?: boolean
}


function Navbar(props: NavbarProps ){

    const { className, icon, isFooter }  = props;

    const textMarginClass = isFooter ? "mx-6" : "mx-20";

    return (
        <nav className = {className}>
        {[
          ["Welcome", "home"],
          ["About", "about"],
          ["Collections", "collections"],
        ].map(([title, id]) => (
            <Text text={title} href= {`#${id}`} weight="medium" className = {`${textMarginClass} text-slate-700`}/>
        ))}
            <Text text={"Shop"} href = "/shopping" weight="medium" className = {`${textMarginClass} text-slate-700`}/>
       
            {icon && <span>{icon}</span>}

      </nav>            
    )
}


export default Navbar;