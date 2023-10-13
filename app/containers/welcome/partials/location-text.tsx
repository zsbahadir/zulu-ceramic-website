//import Link
import Link from "next/link";

//import icons
import { IconType } from "react-icons";
import { FaMapMarkerAlt } from "react-icons/fa";

//import Components
import Text from "@/components/Text";

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

    <div className="flex">
        <Icon size={24} color="black" className="mx-2"/>
      <div className="flex">
        {links?.map((link) => {
          
            return (
              <Text text={link.websiteText} href={link.websiteLink} italic className="mr-6 hover:font-semibold" />
            );
          
        })}
      </div>
    </div>

    <Text  text={"* You can reach our store from the links below"} italic className="text-xs ml-5 text-stone-400" />
    </div>
  );
}

export default LocationText;
