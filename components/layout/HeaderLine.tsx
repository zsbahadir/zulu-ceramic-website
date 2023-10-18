
//Import Logo's Image
import trademark from "@/public/images/trademark.png";
import Card from "../card/Card";


interface HeaderLineProps {
  hasLine?: boolean; 
  hasLabel?: boolean;
  title?: string;
  }

function HeaderLine( props: HeaderLineProps ) {
  const { hasLine, hasLabel, title } = props;



  return (
    <div>
      {!hasLabel ? (      
      <Card src={trademark} alt="Zulu's trademark" width={80} height={80} href="https://www.instagram.com/zuluceramics"/>
    ):(
      <h3 className="ml-16 mt-10">{ title }</h3>
      )}
      {hasLine && 
      <div
        className={`w-[1300px] left-[62px] absolute border border-pink opacity-60`}

        // when w-[${width}px] is written, couldn't get width property on the page.
      ></div>
    }
    </div>
  
  );
}

export default HeaderLine;
