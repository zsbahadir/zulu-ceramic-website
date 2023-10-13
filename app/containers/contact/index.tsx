//Import images
import ContactUsBackground from "@/public/images/contactBackground.jpg";
import ContactUsImage from "@/public/images/contactUsImage.jpg";
//Import Partials
import ContactPageForm from "./partials/ContactPageForm";
import Card from "@/components/Card";
import ContactPageLayout from "./partials/ContactPageLayout";
import Footer from "@/components/Footer";

function ContactUsSection() {
  return (
    <div>
        <ContactPageLayout bgImage={ContactUsBackground} bgWidth={1100}>

        <ContactPageForm />
        <Card src={ContactUsImage} alt={"ContactUsImage"} width={291} height={501}/>
        
        </ContactPageLayout>
        <Footer/>
    </div>
  );
}

export default ContactUsSection;
