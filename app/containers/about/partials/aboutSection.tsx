//Import Next
import Image from "next/image";

import paintingCup from "@/public/images/paintingCup.png";

import { storage } from "@/app/firebase";

function AboutSection() {
  //const bucket = storageRef.bucket('my-bucket');
  //const url = bucket.getDownloadUrl('images/0.jpg');

  //<img src={url} />

  return (
    <div className="inline-flex ml-14">
      {/* //Left-Top Image */}
      <div>
        <Image
          src={paintingCup}
          alt="Someone painting cup"
          width={468}
          height={365}
          className="rounded"
        />
      </div>

      {/* Text */}
      <div className="border-box ml-20 w-1/2 flex items-center">
        <p className="text-[18px] font-light tracking-wide leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu
          lectus molestie, tristique ex vel, vestibulum massa. Nullam non auctor
          velit. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Aenean iaculis eros vel mauris porttitor
          ultrices. .
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
