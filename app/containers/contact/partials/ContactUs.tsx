//Import Components
import Button from "@/components/Button";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";

interface ContactUsProps {
    className?: string | undefined;
}

function ContactUs(props: ContactUsProps ){
    return(
        <div className=" w-full bg-neutral-200 shadow-inner  backdrop-blur-[15.40px] grid place-items-center">
            <div className="m-2 text-center w-full h-full inline-grid place-content-center">
            <span className="text-xl font-light">Contact US</span>
            <div className=" mt-8 w-52">
            <div className="mb-6">
            <Input type= "text" name="name" placeholder="Name" text_size={'sm'} width={52}/>
            </div>
            <div className="mb-6">
            <Input type= "text" name="e-mail" placeholder="E-mail"  text_size={'sm'} width={52}/>
            </div>
            <TextArea
             name="message"
             placeholder="Your Message..."
             rows={4}
             text_size={'sm'}
             width={52}/>
             </div>
             <Button className="btnPink mt-2 place-self-center " width={100} height={20}>
            <span className="text-sm flex justify-center align-middle">Submit</span>
          </Button>
             </div>
            
        </div>
    )
}

export default ContactUs;