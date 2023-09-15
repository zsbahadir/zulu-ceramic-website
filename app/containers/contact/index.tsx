//Import Next
import Image from "next/image";

//Import images
import ContactUsBackground from "@/public/images/contactBackground.jpg";
import ContactUsImage from "@/public/images/contactUsImage.jpg";
//Import Partials
import ContactUs from "./partials/ContactUs";

function ContactUsSection() {
  return (
    <div className="flex relative justify-center items-center mt-20">
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

export default ContactUsSection;
