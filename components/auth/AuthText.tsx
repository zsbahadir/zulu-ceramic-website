'use client'

import { UserAuth } from '@/app/context/AuthContext'

//import icons
import { FaShoppingBasket } from 'react-icons/fa'
import Button from '../cta/Button'
import Text from '../text/Text'

interface AuthTextProps {}

function AuthText (props: AuthTextProps) {
  const { user, logOut }: any = UserAuth()

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log('SignOut error', error)
    }
  }

  return (
    <div>
      <div className='flex justify-evenly w-72 items-center align-bottom'>
        {/* duzenlenecek <Text text={`Welcome ${<Text text={'Zeynep'} bold/>}`} italic  /> */}
        <span className='italic text-sm'>
          Welcome <span className='font-bold'>{user.displayName}</span>
        </span>
        <FaShoppingBasket size={22} fill='#D7648A' />
      </div>
      <Button
        width={100}
        height={10}
        label={'Sign Out'}
        className='text-sm float-right mt-3'
        onClick={handleSignOut}
      />
    </div>
  )
}

export default AuthText
