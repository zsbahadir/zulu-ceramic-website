//Import Next
import Link from "next/link";
import Image from "next/image";

import { GetServerSideProps } from 'next';

//Import Logo's Image
import trademark from "@/public/images/trademark.png";
import ProductContainer from "@/app/shopping/[...id]/partials/ProductContainer";

//Import Mini Cup images
import blueMini from '@/public/images/shopping/CupsMini/blueMini.jpg'
import grayMini from '@/public/images/shopping/CupsMini/grayMini.jpg'
import greenMini from '@/public/images/shopping/CupsMini/greenMini.jpg'
import lightBlueMini from '@/public/images/shopping/CupsMini/lightBlueMini.jpg'
import orangeMini from '@/public/images/shopping/CupsMini/orangeMini.jpg'
import pinkMini from '@/public/images/shopping/CupsMini/pinkMini.jpg'
import turquazMini from '@/public/images/shopping/CupsMini/turquazMini.jpg'
import yellowMini from '@/public/images/shopping/CupsMini/yellowMini.jpg'

//Import Midi Cup images
import blueMidi from '@/public/images/shopping/CupsMidi/blueMidi.jpg'
import grayMidi from '@/public/images/shopping/CupsMidi/grayMidi.jpg'
import greenMidi from '@/public/images/shopping/CupsMidi/greenMidi.jpg'
import orangeMidi from '@/public/images/shopping/CupsMidi/orangeMidi.jpg'
import pinkMidi from '@/public/images/shopping/CupsMidi/pinkMidi.jpg'
import turquazMidi from '@/public/images/shopping/CupsMidi/turquazMidi.jpg'
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import Header from "@/components/layout/Header";







const productImages = [
  {
    id: 1,
    type: "Expresso Cup",
    src: blueMini,
    alt: "blueMini_Img",
    productName: "Blue",
    price: 24,
  },
  {
    id: 2,
    type: "Expresso Cup",
    src: grayMini,
    alt: "grayMini_Img",
    productName: "Gray",
    price: 24,
  },
  {
    id: 3,
    type: "Expresso Cup",
    src: greenMini,
    alt: "greenMini_Img",
    productName: "Green",
    price: 24,
  },
  {
    id: 4,
    type: "Expresso Cup",
    src: lightBlueMini,
    alt: "lightBlueMini_Img",
    productName: "Light Blue",
    price: 24,
  },
  {
    id: 5,
    type: "Expresso Cup",
    src: orangeMini,
    alt: "orangeMini_Img",
    productName: "Orange",
    price: 24,
  },
  {
    id: 6,
    type: "Expresso Cup",
    src: pinkMini,
    alt: "pinkMini_Img",
    productName: "Pink",
    price: 24,
  },
  {
    id: 7,
    type: "Expresso Cup",
    src: turquazMini,
    alt: "turquazMini_Img",
    productName: "Turquaz",
    price: 24
  },
  {
    id: 8,
    type: "Expresso Cup",
    src: yellowMini,
    alt: "yellowMini_Img",
    productName: "Yellow",
    price: 24
  },
  {
    id: 9,
    src: blueMidi,
    alt: "blueMidi_Img",
    productName: "Blue",
    price: 31
  },
  {
    id: 10,
    src: grayMidi,
    alt: "grayMidi_Img",
    productName: "Gray",
    price: 31
  },
  {
    id: 11,
    src: greenMidi,
    alt: "greenMidi_Img",
    productName: "Green",
    price: 31
  },
  {
    id: 12,
    src: orangeMidi,
    alt: "orangeMidi_Img",
    productName: "Orange",
    price: 31
  },
  {
    id: 13,
    src: pinkMidi,
    alt: "pinkMidi_Img",
    productName: "Pink",
    price: 31
  },
  {
    id: 14,
    src: turquazMidi,
    alt: "turquazMidi_Img",
    productName: "Turquaz",
    price: 31
  },
  {
    id: 15,
    src: yellowMini,
    alt: "yellowMini_Img",
    productName: "Yellow",
    price: 31
  }
]

const breadcrumbItems = [
  { label: 'Shopping Center', href: '/shopping' },
  { label: 'Cups', href: '/shopping' },
  { label: 'Espresso Cups', href: `/shopping/`},
  { label: 'Orange', href: `/shopping/1`},
];

interface ProductPageProps {
  params: any,
}


 function ProductPage(props: ProductPageProps ){

    const { params } = props

    console.log('pageden basinca', params)
  
    const selectedImage = productImages?.find((productImage: any) => productImage.id === params.id);

    console.log(selectedImage)


    return  (
    <div>
    <Header homePage={false} hasLine={false}/>
    <Breadcrumbs items={breadcrumbItems}/>
    <ProductContainer images={productImages.slice(0, 8)} selectedImage={selectedImage} />
    </div>
    )
}

export default ProductPage;