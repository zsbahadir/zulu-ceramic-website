//Import Next
import Link from "next/link";

//Import Icons 
import { FaInstagram} from "react-icons/fa";

//Import Components
import HeaderLine from "@/components/HeaderLine";


function ContactPage() {
  return (
    <div>
      <div className="flex justify-center">
        <nav className="mt-16 absolute flex">
          {[
            ["Welcome", "home"],
            ["About", "about"],
            ["Collections", "collections"],
            ["Shop", "shop"],
          ].map(([title, id]) => (
            <Link href={`#${id}`} className="mx-6 text-slate-700 font-medium text-m">
              {title}
            </Link>
          ))}
          <Link href="https://www.instagram.com/zuluceramics/" target="_blank" className="mx-6">
            <FaInstagram className="w-6 h-6"/>
          </Link>
        </nav>
      </div>
      <HeaderLine lineWidth={900} />
      <div className=" flex justify-between text-sm my-2 mx-6 text-gray-400">
        <span>© 2023, Zulu Ceramic Powered by Shopify</span>
        <span className=" w-1/5 flex justify-between">
          Terms & Conditions <span>Privacy Policy</span>
        </span>
      </div>
    </div>
  );
}

export default ContactPage;
