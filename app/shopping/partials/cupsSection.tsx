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
import espressoImage from '@/public/images/shopping/CupsMidi/espressoImage.jpg'
import filterCoffeeImage from '@/public/images/shopping/CupsMidi/filterCoffeeImage.jpg'

//import components
import Section from '@/components/sections/section'

const cupsImages = [
  {
    src: espressoImage,
    alt: 'espressoImage_Img',
    label: 'Espresso Cups',
    id: 'espressoCups'
  },
  {
    src: filterCoffeeImage,
    alt: 'filterCoffeImage_Img',
    label: 'Filter Coffee / Latte Cups',
    id: 'filterCups'
  }
]

const miniCups = [
  {
    id: 1,
    src: blueMini,
    alt: 'blueMini_Img',
    name: 'Blue',
    price: 24
  },
  {
    id: 2,
    src: grayMini,
    alt: 'grayMini_Img',
    name: 'Gray',
    price: 24
  },
  {
    id: 3,
    src: greenMini,
    alt: 'greenMini_Img',
    name: 'Green',
    price: 24
  },
  {
    id: 4,
    src: lightBlueMini,
    alt: 'lightBlueMini_Img',
    name: 'Light Blue',
    price: 24
  },
  {
    id: 5,
    src: orangeMini,
    alt: 'orangeMini_Img',
    name: 'Orange',
    price: 24
  },
  {
    id: 6,
    src: pinkMini,
    alt: 'pinkMini_Img',
    name: 'Pink',
    price: 24
  },
  {
    id: 7,
    src: turquazMini,
    alt: 'turquazMini_Img',
    name: 'Turquaz',
    price: 24
  },
  {
    id: 8,
    src: yellowMini,
    alt: 'yellowMini_Img',
    name: 'Yellow',
    price: 24
  }
]

const midiCupImages = [
  {
    id: 9,
    src: blueMidi,
    alt: 'blueMidi_Img',
    name: 'Blue',
    price: 31
  },
  {
    id: 10,
    src: grayMidi,
    alt: 'grayMidi_Img',
    name: 'Gray',
    price: 31
  },
  {
    id: 11,
    src: greenMidi,
    alt: 'greenMidi_Img',
    name: 'Green',
    price: 31
  },
  {
    id: 12,
    src: orangeMidi,
    alt: 'orangeMidi_Img',
    name: 'Orange',
    price: 31
  },
  {
    id: 13,
    src: pinkMidi,
    alt: 'pinkMidi_Img',
    name: 'Pink',
    price: 31
  },
  {
    id: 14,
    src: turquazMidi,
    alt: 'turquazMidi_Img',
    name: 'Turquaz',
    price: 31
  },
  {
    id: 15,
    src: yellowMini,
    alt: 'yellowMini_Img',
    name: 'Yellow',
    price: 31
  }
]

function CupsSection () {
  return (
    <>
      <Section
        title={'Cups'}
        images={cupsImages}
        cols={2}
        gap={4}
        text_size={'md'}
        id={'cups'}
        hasLine
      />

      <Section
        title={'Espresso Cups'}
        images={miniCups}
        cols={3}
        gap={4}
        text_size={'sm'}
        id={'espressoCups'}
        hasLine
      />
      <Section
        title={'Filter Coffee / Latte Cups'}
        images={midiCupImages}
        cols={3}
        gap={4}
        text_size={'sm'}
        id={'filterCups'}
        hasLine
      />
    </>
  )
}

export default CupsSection
