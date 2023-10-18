
import paintingCup from "@/public/images/paintingCup.png";

//import components
import Card from "@/components/card/Card";
import Text from "@/components/text/Text";

interface AboutSectionProps{
  className?: string;
}

function AboutSection( props:AboutSectionProps ) {

  const { className } = props;
 

  return (
    <div className="flex ml-14">
        <Card
          src={paintingCup}
          alt="Someone painting cup"
          width={468}
          height={365}
        />

      {/* Text */}
      <div className="border-box ml-20 w-1/2 flex items-center">
      
        <Text 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu
          lectus molestie, tristique ex vel, vestibulum massa. Nullam non auctor
          velit. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Aenean iaculis eros vel mauris porttitor
          ultrices. ." 
          className="font-light tracking-wide leading-loose"/>
      </div>
    </div>
  );
}

export default AboutSection;
