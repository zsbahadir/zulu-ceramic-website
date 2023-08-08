
import ImageContainer from "@/app/components/ImageContainer";

import paintingCup from "@/app/public/images/paintingCup.png";


function AbouSection() {
  return (
  
        <div className="inline-flex ml-14">
        {/* //Left-Top Image */}
        <div>
          <ImageContainer
            src={paintingCup}
            alt="Someone painting cup"
            width={468}
            height={365}
            rounded
          />
        </div>

        {/* Text */}
        <div className="border-box ml-20 w-1/2 flex items-center">
          <p className="text-[18px] font-light tracking-wide leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu
            lectus molestie, tristique ex vel, vestibulum massa. Nullam non
            auctor velit. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Aenean iaculis eros vel mauris
            porttitor ultrices. .
          </p>
        </div>
      </div>

  )
}

export default AbouSection;