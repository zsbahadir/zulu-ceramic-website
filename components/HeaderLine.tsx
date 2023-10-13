
//Import Logo's Image
import trademark from "@/public/images/trademark.png";
import Card from "./Card";


interface HeaderLineProps {
  width: number;
  left: number
  }

function HeaderLine( props: HeaderLineProps ) {
  const { width, left } = props;

  return (
    <div>
      <Card src={trademark} alt="Zulu's trademark" width={80} height={80} href="https://www.instagram.com/zuluceramics"/>
      <div
        className={`w-[1378px] left-[${left}px] absolute border border-pink opacity-60`}

        // when w-[${width}px] is written, couldn't get width property on the page.
      ></div>
    </div>
  );
}

export default HeaderLine;
