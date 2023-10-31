//import firebase
import { auth } from '@/app/firebase/firebase.config'
import { signInWithEmailAndPassword } from 'firebase/auth'

interface SingInProps {
  email: string
  password: string
}
async function SignIn (props: SingInProps) {
  const { email, password } = props
  let result = null
  let error = null
  try {
    result = await signInWithEmailAndPassword(auth, email, password)
  } catch (e) {
    error = e
  }
  return { result, error }
}

export default SignIn
