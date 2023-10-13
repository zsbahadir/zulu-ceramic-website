//Import Components
import FormLayout from "@/components/FormLayout";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";

interface ContactUsProps {
    className?: string;
}

function ContactUsForm(props: ContactUsProps ){

    const { className } = props;
    return(

        <FormLayout 
            formTitle="Contact Us"
            buttonWidth={100} 
            buttonHeight={25} 
            buttonLabel={"Submit"} 
            buttonClassname="btnPink mt-2 place-self-center text-sm font-bold"
            titleClassName="text-xl font-light"
            >

            <Input type= "text" name="name" placeholder="Name" text_size={'sm'} width={52}/>

            <Input type= "text" name="name" placeholder="Name" text_size={'sm'} width={52}/>

            <TextArea
             name="message"
             placeholder="Your Message..."
             rows={4}
             text_size={'sm'}
             width={52}/>

        </FormLayout>
    )
}

export default ContactUsForm;