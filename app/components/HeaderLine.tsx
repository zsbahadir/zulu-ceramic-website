import LogoImage from "./LogoImage";

//w-870 left-62

interface HeaderLineProps {
  lineWidth: number;
}

function HeaderLine(props: HeaderLineProps) {
  const { lineWidth } = props;

  return (
    <div className="">
      {/* logo */}
      <LogoImage logoWidth={7} logoHeight={7} />

      {/* Line */}
      <div
        className={`w-[1378px] left-[62px] absolute border border-pink opacity-60`}
      ></div>
    </div>
  );
}

export default HeaderLine;
