import Link from "next/link";
import Card from "./Card";


interface IconLinkProps{

}


function IconLink(props:IconLinkProps ){

    const {} = props;

    
    return(
        <Link href={""}>
            <Card src={undefined} alt={""} width={0} height={0}/>
        </Link>
    )
}

export default IconLink;


{/* <a href="https://www.instagram.com/zuluceramics/" target="_blank">
// <Image src={instaLogo} alt={"Shows Insta-Logo"} width={24} height={24} className="float-right mt-2"/>
// </a> */}