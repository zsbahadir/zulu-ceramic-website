//Import images
import ContactUsBackground from '@/public/images/contactBackground.jpg'
import ContactUsImage from '@/public/images/contactUsImage.jpg'
//Import Partials
import ContactPageForm from './partials/ContactPageForm'
import Card from '@/components/card/Card'
import ContactPageLayout from './partials/ContactPageLayout'
import Footer from '@/components/layout/Footer'

function ContactUsSection () {
  return (
    <div>
      <ContactPageLayout bgImage={ContactUsBackground} bgWidth={1100}>
        <ContactPageForm />
        <Card
          src={ContactUsImage}
          alt={'ContactUsImage'}
          width={291}
          height={501}
        />
      </ContactPageLayout>
    </div>
  )
}

export default ContactUsSection
