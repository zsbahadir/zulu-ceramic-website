//import firebase
import { auth } from '@/app/firebase/firebase.config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

interface SignUpProps {
  email: string
  password: string
}

async function SignUp (props: SignUpProps) {
  const { email, password } = props
  let result = null
  let error = null
  try {
    result = await createUserWithEmailAndPassword(auth, email, password)
  } catch (e) {
    error = e
  }
  return { result, error }
}

export default SignUp
