'use client'
//import React
import { useState } from 'react'

//import components
import Button from '../cta/Button'
import LoginForm from '../form/LoginForm'
import Modal from '../modal/Modal'

function AuthButttons () {
  const [showModal, setShowModal] = useState(false)
  const [type, setType] = useState('')

  const handleLoginClick = () => {
    setShowModal(true)
    setType('login')
  }

  const handleSignupClick = () => {
    setShowModal(true)
    setType('signUp')
  }

  return (
    <div className='flex justify-evenly w-36 items-center'>
      <Button
        width={100}
        height={10}
        label={'Login'}
        className='text-sm'
        onClick={handleLoginClick}
      />
      <Button
        width={74}
        height={28}
        label={'Sign Up'}
        onClick={handleSignupClick}
        className='btnPink mt-2 place-self-center text-sm font-bold'
      />
      {showModal && (
        // <Portal>
        <div className='flex'>
          <Modal onClose={() => setShowModal(false)}>
            <LoginForm type={type} />
          </Modal>
        </div>
        // </Portal>
      )}
    </div>
  )
}

export default AuthButttons
