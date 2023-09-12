//import Components
import HeaderLine from "@/app/components/HeaderLine";

function ContactPage() {
  return (
    <div>
      <div className="flex justify-center align-top">
        <nav className="mt-16 absolute">
          {[
            // [" ","/"],
            ["About", "/about"],
            ["Collections", "/collections"],
            ["Contact", "/contact"],
          ].map(([title, url]) => (
            <a href={url} className="mx-6 text-slate-700 font-medium text-m">
              {title}
            </a>
          ))}
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
