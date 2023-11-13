//import partials
import Section from '@/components/sections/section'

//Import Components
import ScrollToTopButton from '@/components/navigation/ScrollToTop'

//Import Shopping Images
import cupsShopping from '@/public/images/shopping/cupsShopping.jpg'
import ornamentsShopping from '@/public/images/shopping/ornamentsShopping.jpg'
import platesShopping from '@/public/images/shopping/platesShopping.jpg'
import outletShopping from '@/public/images/shopping/outletShopping.jpg'
import CupsSection from './partials/cupsSection'
import OrnamentSection from './partials/ornamentSection'
import PlatesSection from './partials/platesSection'

const images = [
  {
    src: cupsShopping,
    alt: 'Cups Shopping Image',
    label: 'Cups',
    link: '',
    id: 'cups'
  },
  {
    src: ornamentsShopping,
    alt: 'Ornaments Shopping Image',
    label: 'Ornaments',
    link: '',
    id: 'ornaments'
  },
  {
    src: platesShopping,
    alt: 'Plates Shopping Image',
    label: 'Plates',
    link: '',
    id: 'plates'
  },
  {
    src: outletShopping,
    alt: 'Outlet Shopping Image',
    label: 'Outlet',
    link: '',
    id: 'outlet'
  }
]

function Shopping () {
  return (
    <div className='mt-4'>
      <div className='flex justify-center items-center my-24'>
        {/* <Section
          title={''}
          images={images?.slice(0, 3)}
          cols={3}
          gap={4}
          text_size={'lg'}
          hasLine={false}
          id={''}
        /> */}
        buraya iki uc foto ve yazi gelsin.
      </div>
      <CupsSection />
      <OrnamentSection />
      <PlatesSection />
      <ScrollToTopButton />
    </div>
  )
}

export default Shopping
