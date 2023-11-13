import Section from '@/components/sections/section'
import plateSkyMaxi from '@/public/images/shopping/plates/plateSkyMaxi.jpg'
import plateSkyMidi from '@/public/images/shopping/plates/plateSkyMidi.jpg'
import plateSkyMini from '@/public/images/shopping/plates/plateSkyMini.jpg'
import plateSkySauce from '@/public/images/shopping/plates/plateSkySauce.jpg'

const platesImages = [
  {
    id: 21,
    src: plateSkyMaxi,
    alt: 'plateSkyMaxi_Img',
    name: 'Sky Maxi',
    price: 32
  },
  {
    id: 22,
    src: plateSkyMidi,
    alt: 'plateSkyMidi_Img',
    name: 'Sky Midi',
    price: 28
  },
  {
    id: 23,
    src: plateSkyMini,
    alt: 'plateSkyMini_Img',
    name: 'Sky Mini',
    price: 24
  },
  {
    id: 24,
    src: plateSkySauce,
    alt: 'plateSkySauce_Img',
    name: 'Sky Sauce',
    price: 20
  }
]

function PlatesSection () {
  return (
    <Section
      title={'Plates'}
      images={platesImages}
      cols={3}
      gap={0}
      text_size={'sm'}
      id={'plates'}
      hasLine
    />
  )
}

export default PlatesSection
