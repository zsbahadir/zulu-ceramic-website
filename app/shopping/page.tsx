//import Next
import Image from "next/image";

//import Partials
import ShoppingHeader from "@/components/ShoppingHeader";

import ProductSection from "@/components/ProductSection";
import ShoppingHomePage from "./partials/shoppingHomePage";
import ProductChoosingSection from "@/components/ProductChoosingSection";

//Import Components
import ScrollToTopButton from "@/components/ScrollToTop";

//Import Shopping Images
import cupsShopping from '@/public/images/shopping/cupsShopping.jpg';
import ornamentsShopping from '@/public/images/shopping/ornamentsShopping.jpg';
import platesShopping from '@/public/images/shopping/platesShopping.jpg';
import outletShopping from '@/public/images/shopping/outletShopping.jpg';

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

//Import select Cup Images
import espressoImage from '@/public/images/shopping/CupsMidi/espressoImage.jpg';
import filterCoffeeImage from '@/public/images/shopping/CupsMidi/filterCoffeeImage.jpg';


const images = [
  {
      src: cupsShopping,
      alt: "Cups Shopping Image",
      label: "Cups",
      link: ""
  },
  {
      src: ornamentsShopping,
      alt: "Ornaments Shopping Image",
      label: "Ornaments",
      link: ""
  },
  {
      src: platesShopping,
      alt: "Plates Shopping Image",
      label: "Plates",
      link: ""
  },
  {
      src: outletShopping,
      alt: "Outlet Shopping Image",
      label: "Outlet",
      link: ""
  },
]

const cupsImages = [
  {
    src: espressoImage,
    alt: "espressoImage_Img",
    label: "Espresso Cups",
  },
  {
    src: filterCoffeeImage,
    alt: "filterCoffeImage_Img",
    label: "Filter Coffee / Latte Cups",
  },
]


  const miniCups = [
    {
      id: 1,
      src: blueMini,
      alt: "blueMini_Img",
      name: "Blue",
      price: 24
    },
    {
      id: 2,
      src: grayMini,
      alt: "grayMini_Img",
      name: "Gray",
      price: 24
    },
    {
      id: 3,
      src: greenMini,
      alt: "greenMini_Img",
      name: "Green",
      price: 24
    },
    {
      id: 4,
      src: lightBlueMini,
      alt: "lightBlueMini_Img",
      name: "Light Blue",
      price: 24
    },
    {
      id: 5,
      src: orangeMini,
      alt: "orangeMini_Img",
      name: "Orange",
      price: 24
    },
    {
      id: 6,
      src: pinkMini,
      alt: "pinkMini_Img",
      name: "Pink",
      price: 24
    },
    {
      id: 7,
      src: turquazMini,
      alt: "turquazMini_Img",
      name: "Turquaz",
      price: 24
    },
    {
      id: 8,
      src: yellowMini,
      alt: "yellowMini_Img",
      name: "Yellow",
      price: 24
    },
  ];

  const midiCupImages = [
    {
      src: blueMidi,
      alt: "blueMidi_Img",
      name: "Blue",
      price: 31
    },
    {
      src: grayMidi,
      alt: "grayMidi_Img",
      name: "Gray",
      price: 31
    },
    {
      src: greenMidi,
      alt: "greenMidi_Img",
      name: "Green",
      price: 31
    },
    {
      src: orangeMidi,
      alt: "orangeMidi_Img",
      name: "Orange",
      price: 31
    },
    {
      src: pinkMidi,
      alt: "pinkMidi_Img",
      name: "Pink",
      price: 31
    },
    {
      src: turquazMidi,
      alt: "turquazMidi_Img",
      name: "Turquaz",
      price: 31
    },
    {
      src: yellowMini,
      alt: "yellowMini_Img",
      name: "Yellow",
      price: 31
    },
  ];




function Shopping() {

    return (
      <div className="mt-4">

        <ShoppingHeader name={"Zeynep"}/>

            <div className="flex justify-center items-center my-40">
            <ShoppingHomePage images={images}/>
            </div>
            <ProductSection title={"Cups"} images={cupsImages} cols={2} gap={3} text_size={"lg"} id={'cups'}/>
            <ProductSection title={"Espresso Cups"} images={miniCups} cols={3} gap={4} text_size={"sm"} id={""}/>
            <ProductSection title={"Filter Coffee / Latte Cups"} images={midiCupImages} cols={3} gap={4} text_size={"sm"} id={""}/>
            <ScrollToTopButton/>


        </div>
    )
}

export default Shopping;