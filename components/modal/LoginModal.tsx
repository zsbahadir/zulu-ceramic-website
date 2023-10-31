'use client'
//import React-Next
import { useState } from 'react'

//import components

import Modal from '@/components/modal/Modal'
import LoginForm from '@/components/form/LoginForm'

interface LoginProps {}

function LoginModal (props: LoginProps) {
  const [isVisible, setIsVisible] = useState(true)

  const {} = props

  return (
    <LoginModal>
      {isVisible && (
        <div className='flex justify-center'>
          <Modal title='Login' onClose={() => setIsVisible(false)}>
            <LoginForm type={'login'} onClose={() => setIsVisible(false)} />
          </Modal>
        </div>
      )}
    </LoginModal>
  )
}

export default LoginModal
