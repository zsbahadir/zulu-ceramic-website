//import ornaments images
import Section from '@/components/sections/section'
import ornamentsCircle from '@/public/images/shopping/ornaments/ornamentsCircle.png'
import ornamentsSnow from '@/public/images/shopping/ornaments/ornamentsSnow.png'
import ornamentsSpade from '@/public/images/shopping/ornaments/ornamentsSpade.png'
import ornamentsStar from '@/public/images/shopping/ornaments/ornamentsStar.jpg'
import ornamentsTree from '@/public/images/shopping/ornaments/ornamentsTree.png'

const ornamentsImages = [
  {
    id: 16,
    src: ornamentsCircle,
    alt: 'ornamentsCircle_Img',
    name: 'Circle',
    price: 20
  },
  {
    id: 17,
    src: ornamentsSnow,
    alt: 'ornamentsSnow_Img',
    name: 'Snow',
    price: 20
  },
  {
    id: 18,
    src: ornamentsSpade,
    alt: 'ornamentsSpade_Img',
    name: 'Spade',
    price: 20
  },
  {
    id: 19,
    src: ornamentsStar,
    alt: 'ornamentsStar_Img',
    name: 'Star',
    price: 20
  },
  {
    id: 20,
    src: ornamentsTree,
    alt: 'ornamentsTree_Img',
    name: 'Tree',
    price: 20
  }
]

function OrnamentSection () {
  return (
    <Section
      title={'Ornaments'}
      images={ornamentsImages}
      cols={3}
      gap={4}
      text_size={'md'}
      id={'ornaments'}
      hasLine
    />
  )
}

export default OrnamentSection
