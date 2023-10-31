import React from 'react'
import Text from '../text/Text'
import Button from '../cta/Button'
import {
  FaClosedCaptioning,
  FaDoorClosed,
  FaRegWindowClose,
  FaWindowClose
} from 'react-icons/fa'

interface ModalProps {
  onClose: () => void
  children: React.ReactNode
  title?: string | number | any
}

const Modal = (props: ModalProps) => {
  const { onClose, children, title } = props

  const handleCloseClick = () => {
    onClose()
  }

  const modalContent = (
    <>
      <div className='absolute w-auto my-6 mx-auto max-w-3xl inset-0 z-50 flex justify-center items-center outline-none focus:outline-none'>
        {/*content*/}
        <div className='rounded-lg shadow-lg relative w-auto h-auto bg-white outline-none focus:outline-none'>
          {/* header*/}
          <div className='flex items-start justify-between p-5 rounded-t '>
            {/* title */}
            <Text text={title} />
            {/* X close */}
            <Button
              width={20}
              height={20}
              label={''}
              icon={<FaRegWindowClose className='opacity-30' />}
              onClick={handleCloseClick}
              className='float-right'
            />
          </div>
          {children}
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  )

  return modalContent
}

export default Modal
