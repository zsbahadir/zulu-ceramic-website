import Image from "next/image";

import trademark from "@/public/images/trademark.png";

interface HeaderLineProps {
  logoWidth: number;
  logoHeight: number;
}

function LogoImage(props: HeaderLineProps) {
  const { logoWidth, logoHeight } = props;
  return (
    <Image
      src={trademark}
      alt="Trade Mark"
      className={`w-${logoWidth} h-${logoHeight} rounded-2xl mt-4`}
    />
  );
}

export default LogoImage;
