'use client'
//import react
import { useState } from 'react'
import { useRouter } from 'next/navigation'

//import Auth context
import SignUp from '@/app/context/signUp'
import SignIn from '@/app/context/signIn'
import { UserAuth } from '@/app/context/AuthContext'

//import components
import Text from '../text/Text'
import Input from '../input/Input'
import Card from '../card/Card'
import FormLayout from './FormLayout'

//import Google Icon
import googleIcon from '@/public/images/googleIcon.jpg'

interface LoginFormProps {
  type: string
  onClose?: () => void
}

function LoginForm (props: LoginFormProps) {
  const { type, onClose } = props

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  //Login with Google
  const { user, googleSignIn }: any = UserAuth()
  console.log('Textten', user)

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.log('SignIn error', error)
    }
  }

  //Login with email-password
  const handleEmailSignIn = async (event: React.FormEvent) => {
    event.preventDefault()
    const { result, error } = await SignIn({ email, password })
    if (error) {
      return console.log('Sign In', error)
    }
    console.log('handle sign in', result)
    return router.push('/myCart')
  }

  //SignUp with email-password
  const handleEmailSignUp = async (event: React.FormEvent) => {
    event.preventDefault()
    const { result, error } = await SignUp({ email, password })
    if (error) {
      return console.log('signUp', error)
    }
    console.log('handle sign up', result)
    return router.push('/myCart')
  }

  const LoginTopLabel = () => {
    return (
      <div className=' flex flex-col space-y-4 items-center'>
        <Text
          text={'Join Zulu World'}
          size='3xl'
          weight='bold'
          className='text-center text-pink mb-4 text-3xl'
        />
        <Text text={type === 'login' ? 'Login with' : 'Sign Up with'} />
        <Card
          src={googleIcon}
          alt={'google Icon'}
          width={20}
          height={20}
          onClick={handleGoogleSignIn}
          className='cursor-pointer'
        />
      </div>
    )
  }

  switch (type) {
    case 'login':
      return (
        <div className='w-72 h-96 flex flex-col space-y-4 items-center'>
          <LoginTopLabel />
          <FormLayout
            buttonWidth={100}
            buttonHeight={30}
            buttonLabel={'Submit'}
            buttonClassName='btnPink mt-2 place-self-center text-sm font-bold'
            onSubmit={handleEmailSignIn}
          >
            <Input
              type='text'
              inputSize={'sm'}
              // label='Email'
              labelSize='sm'
              placeholder='Email'
              width={250}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              type='text'
              inputSize={'sm'}
              // label='Password'
              labelSize='sm'
              placeholder='Password'
              onChange={e => setPassword(e.target.value)}
            />
          </FormLayout>
        </div>
      )
      break
    case 'signUp':
      return (
        <div className='w-72 h-96 flex flex-col space-y-2 items-center'>
          <LoginTopLabel />
          <FormLayout
            buttonWidth={100}
            buttonHeight={30}
            buttonLabel={'Submit'}
            buttonClassName='btnPink mt-2 place-self-center text-sm font-bold'
            onSubmit={handleEmailSignUp}
          >
            <Input
              type='text'
              inputSize={'sm'}
              // label='Email'
              labelSize='sm'
              placeholder='Email'
              width={250}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              type='text'
              inputSize={'sm'}
              // label='Password'
              labelSize='sm'
              placeholder='Password'
              onChange={e => setPassword(e.target.value)}
            />
            <Input
              type='text'
              inputSize={'sm'}
              // label='Password'
              labelSize='sm'
              placeholder='Confirm Password'
              onChange={e => setPassword(e.target.value)}
            />
          </FormLayout>
        </div>
      )
      break
    default:
      return null
  }
}

export default LoginForm
