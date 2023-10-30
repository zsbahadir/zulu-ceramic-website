'use client'
//import Icons
import { UserAuth } from '@/app/context/AuthContext'
import AuthButttons from './AuthButtons'
import AuthText from './AuthText'

interface AuthSectionProps {}

function AuthSection (props: AuthSectionProps) {
  const { user }: any = UserAuth()

  return <div>{user ? <AuthText /> : <AuthButttons />}</div>
}

export default AuthSection
