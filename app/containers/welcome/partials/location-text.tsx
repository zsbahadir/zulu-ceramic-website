//Import Next
import Link from "next/link";

//Import icons
import { IconType } from "react-icons";
import { FaMapMarkerAlt } from "react-icons/fa";

interface LocationTextProps {
  icon?: IconType;
}

function LocationText(props: LocationTextProps) {
  const { icon: Icon = FaMapMarkerAlt } = props;

  //text and link data
  const links = [
    {
      websiteText: "Beymen",
      websiteLink: "",
    },
    {
      websiteText: "Beymen.com.tr",
      websiteLink: "https://www.beymen.com/search?q=zulu",
    },
    {
      websiteText: "hipicon.com",
      websiteLink: "https://hipicon.com/en/search?q=zulu&page=1",
    },
    {
      websiteText: "dotconceptstore.com",
      websiteLink: "",
    },
    {
      websiteText: "createrra.com.tr",
      websiteLink:
        "https://www.createrra.com.tr/index.php?route=product/search&search=zulu",
    },
    {
      websiteText: "shopier.com.tr",
      websiteLink:
        "https://www.shopier.com/ShowProductNew/storefront.php?shop=zuluceramics/&sid=NHlkN0x0T1k5OUUzU2N2bDBfLTFfIF8g",
    },
  ];

  return (
    <div className="mx-10">
    <div className="inline-flex">
      <span className="mx-2" >
        <Icon size={24} color="black" />
      </span>
      <div>
        {/* for store has link */}
        {links?.map((link) => {
          
            return (
              <Link
                href={link.websiteLink}
                target="_blank"
                className="mr-6 italic hover:font-semibold"
              >
                {link.websiteText}
              </Link>
            );
          
        })}
      </div>
      
    </div>
    <div>
    <span className="italic text-xs ml-5 text-stone-400 ">* You can reach our store from the links below</span>
    </div>
    </div>
  );
}

export default LocationText;
