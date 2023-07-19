import React from "react";

//Import Components
import HeaderLine from "../../components/HeaderLine";


const Header = () => {
  return (
    <div className="w-[930px] h-[122px] relative">

      <HeaderLine/>

       {/* Navbar */}
      <nav className="flex sm:justify-center px-3 py-2 ml-12">    
        {[
          // [" ","/"],
          ["Welcome", "/welcome"],
          ["About", "/about"],
          ["Collections", "/collections"],
          ["Shop", "/shop"],
        ].map(([title, url]) => (
          <a
            href={url}
            className="mx-20 my-10 text-slate-700 font-medium"
          >
            {title}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Header;
