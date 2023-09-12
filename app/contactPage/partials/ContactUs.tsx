//Import Components
import Input from "@/app/components/Input";
import TextArea from "@/app/components/TextArea";

interface ContactUsProps {
    className?: string | undefined;
}

function ContactUs(props: ContactUsProps ){
    return(
        <div className=" w-full bg-neutral-200 shadow-inner  backdrop-blur-[15.40px] grid place-items-center">
            <div className="m-2 text-center w-full h-full inline-grid place-content-center ">
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
             </div>
            
        </div>
    )
}

export default ContactUs;