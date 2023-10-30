//Import Components
import HeaderLine from '@/components/layout/HeaderLine'

//Import Image
import instaLogo from '@/public/images/instaLogo.jpg'
import Navbar from '../navigation/Navbar'
import Card from '../card/Card'
import AuthSection from '../auth/AuthSection'
import Modal from '../modal/Modal'

interface HeaderProps {
  homePage: boolean
  hasLine?: boolean
  hasAuth: boolean
}

function Header (props: HeaderProps) {
  const { homePage, hasLine, hasAuth } = props

  //<FaExclamation fill="#D7648A" className="mb-4"  />

  return (
    <div>
      <div className='float-right m-2'>
        {homePage ? (
          <Card
            src={instaLogo}
            alt={'instaLogo'}
            width={24}
            height={24}
            href='https://www.instagram.com/zuluceramics/'
          />
        ) : (
          <AuthSection />
        )}
      </div>

      <Navbar
        className='absolute mt-12 mx-20 flex justify-between w-1/2'
        {...props}
      />
      <HeaderLine hasLine={hasLine} hasLabel={false} title={''} />
    </div>
  )
}

export default Header
