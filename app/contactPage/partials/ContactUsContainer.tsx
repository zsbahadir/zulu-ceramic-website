import Image from "next/image";

//Import images
import ContactUsBackground from "@/app/public/images/contactBackground.jpg";
import ContactUsImage from "@/app/public/images/contactUsImage.jpg";
//Import Components
import ImageContainer from "@/app/components/ImageContainer";
//Import Partials
import ContactUs from "./ContactUs";

function ContactUsContainer() {
  return (
    <div className="flex relative justify-center items-center">
      <Image
        src={ContactUsBackground}
        alt={"Contact Us Background Image"}
        width={1100}
        className="rounded"
      />
      <div className=" flex absolute">
        <div className="flex w-[280px] border rounded-l">
       <ContactUs/>
        </div>
        <Image src={ContactUsImage} alt={"Contact Us Image"} className="rounded-r"/>
      </div>
    </div>
  );
}

export default ContactUsContainer;
