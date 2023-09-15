//Import Next
import Image from "next/image";

//Import Components
import HeaderLine from "@/components/HeaderLine";

//Import Image
import instaLogo from "@/public/images/instaLogo.jpg";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-[950px] h-[122px]">
      <a href="https://www.instagram.com/zuluceramics/" target="_blank">
      <Image src={instaLogo} alt={"Shows Insta-Logo"} width={24} height={24} className="float-right"/>
      </a>
      {/* Navbar */}
      <nav className="flex sm:justify-center px-3 py-2 ml-12 mt-12 absolute">
        {[
          ["Welcome", "home"],
          ["About", "about"],
          ["Collections", "collections"],
          ["Shop", "shop"],
        ].map(([title, id]) => (
          <Link href={`#${id}`} className="mx-20  text-slate-700 font-medium">
            {title}
          </Link>
        ))}
      </nav>
      <HeaderLine lineWidth={0} />
    </div>
  );
};

export default Header;
