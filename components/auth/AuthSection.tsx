'use client'
//import Icons
import { UserAuth } from '@/app/context/AuthContext'
import AuthButttons from './AuthButtons'
import AuthText from './AuthText'

interface AuthNameTextProps {
  className?: string
}

function AuthSection (props: AuthNameTextProps) {
  const { className } = props

  const { user }: any = UserAuth()

  return (
    <div className={className}>{user ? <AuthText /> : <AuthButttons />}</div>
  )
}

export default AuthSection
