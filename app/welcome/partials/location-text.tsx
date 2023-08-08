import Tooltip from "@/app/components/Tooltip";
import Link from "next/link";
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
  ];

  return (
    <div className="inline-flex" >
      <span className="mx-10">
        <Icon size={24} color="black" />
      </span>
      <div>
        {/* for store has link */}
        {links?.map((link) => {
          if (link.websiteLink) {
            return (
              <Link
                href={link.websiteLink}
                target="_blank"
                className="mr-12 italic hover:font-semibold"
              >
                {link.websiteText}
              </Link>
            );
          } else {
            return (
              // for store hasn't link
              <Tooltip
                key={link.websiteText}
                content="Please visit the store."
              >
                <span className="mr-12 italic">{link.websiteText}</span>
              </Tooltip>
            );
          }
        })}
      </div>
    </div>
  );
}

export default LocationText;
