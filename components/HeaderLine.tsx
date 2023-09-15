//Import Next
import Link from "next/link";

//Import Logo's Image
import LogoImage from "./LogoImage";

//w-870 left-62

interface HeaderLineProps {
  lineWidth: number;
  className?: string | undefined;
}

function HeaderLine(props: HeaderLineProps) {
  const { lineWidth, className } = props;

  return (
    <div className="">
      {/* logo */}
      <Link href="https://www.instagram.com/zuluceramics" target="_blank" >
      <LogoImage logoWidth={7} logoHeight={7} />
      </Link>
      {/* Line */}
      <div
        className={`w-[1378px] left-[62px] absolute border border-pink opacity-60`}
      ></div>
    </div>
  );
}

export default HeaderLine;
