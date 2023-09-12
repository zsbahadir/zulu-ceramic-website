//Import Components
import HeaderLine from "@/app/components/HeaderLine";

const Header = () => {
  return (
    <div className="w-[930px] h-[122px]">
      {/* Navbar */}
      <nav className="flex sm:justify-center px-3 py-2 ml-12 mt-12 absolute">
        {[
          // [" ","/"],
          ["Welcome", "/"],
          ["About", "/about"],
          ["Collections", "/collections"],
          ["Shop", "/shop"],
        ].map(([title, url]) => (
          <a href={url} className="mx-20  text-slate-700 font-medium">
            {title}
          </a>
        ))}
      </nav>
      <HeaderLine lineWidth={0} />
    </div>
  );
};

export default Header;
