import AutoSlider from "@/components/AutoSlider";
import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import Header from "@/components/Header";
import HeaderLine from "@/components/HeaderLine";
import Card from "@/components/Card";
import LogoImage from "@/components/LogoImage";



import blueMini from '@/public/images/shopping/CupsMini/blueMini.jpg'
import grayMini from '@/public/images/shopping/CupsMini/grayMini.jpg'
import greenMini from '@/public/images/shopping/CupsMini/greenMini.jpg'
import lightBlueMini from '@/public/images/shopping/CupsMini/lightBlueMini.jpg'
import orangeMini from '@/public/images/shopping/CupsMini/orangeMini.jpg'
import pinkMini from '@/public/images/shopping/CupsMini/pinkMini.jpg'

import Container from "./Container";
import Input from "@/components/Input";
import ScrollToTopButton from "@/components/ScrollToTop";
import ShopHeaderLine from "@/components/ShopHeaderLine";
import TextArea from "@/components/TextArea";
import Text from "@/components/Text";
import Navbar from "@/components/Navbar";

//Import Fonts
import '@/styles/font.css'
import FormLayout from "@/components/FormLayout";
import ContactPageLayout from "../containers/contact/partials/ContactPageLayout";
import BottomFooterText from "@/components/BottomFooterText";

const breadcrumbsItems = [
    { label: 'Anasayfa', href: '/' },
    { label: 'Kategoriler', href: '/categories' },
    { label: 'Ürünler', href: '/categories/products' },
    { label: 'Ürün Detayı', href: '/categories/products/product-detail' },
  ];

  const images = [ blueMini, grayMini, greenMini, lightBlueMini, orangeMini, pinkMini  ]

  const sections = [
    { title: "Logo Image image", component: <LogoImage logoWidth={10} logoHeight={10} /> },
    { title: "Header Line", component: <HeaderLine width={1378} left={62} /> },
    { title: "Navbar", component: <Navbar/> },
    { title: "Header", component: <Header/> }, 
    { title: "Basic Image Container", component: <Card src={blueMini} alt={"blueMini"} width={100} height={100} /> },
    { title: "image container with label", component: <Card src={blueMini} alt={"blueMini"} width={200} height={200} label="Mini Cups"/> },
    { title: "with name and price", component: <Card src={blueMini} alt={"blueMini"} width={200} height={200} name="Blue" price={24}/> },
    { title: "Button", component: <Button className="btnPink font-bold"  width={100} height={60} label={"Submit"}/> },
    { title: "Breadcrumbs", component: <Breadcrumbs items={breadcrumbsItems}/> },
    { title: "AutoSlider", component: <AutoSlider images={images} slidesPerView={3}/> },
    { title: "Input", component: <Input text_size={"sm"}/> },
    { title: "Text Area", component: <TextArea width={40} text_size={"sm"}/> },
    { title: "shop header line", component: <ShopHeaderLine title={"Cups"}/> },
    { title: "Text-1", component: <Text size='xs' weight="bold" text={"Text Component-1"}></Text> },
    { title: "Text-2", component: <Text size='sm' text={"Text Component-2"}/> },
    { title: "Text-3", component: <Text size='md' weight="light" text={"Text Component-3"}/> },
    { title: "Text-4", component: <Text size= '4xl' italic text={"Text Component-4"} handWriting /> },
    { title: "Form Layout", component: <FormLayout buttonWidth={20} buttonHeight={20} buttonLabel={"button"}>
      <Input text_size={""}/>
      <Input text_size={""}/>
      </FormLayout> },
    { title: "Bottom Footer Text", component: <BottomFooterText leftContent={'footer bottom left'} rightContent={'footer bottom right'} /> },

    { title: "Scroll to Top", component: <ScrollToTopButton/> },
  ];


function Components (){
    return (
    <div>
        {sections.map((section, index) => (
        <Container key={index} title={section.title}>
          {section.component}
        </Container>
      ))}
    </div>
    )
}

export default Components;