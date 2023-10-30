//import React
import { ReactNode } from 'react'

import Text from '../text/Text'
import Button from '../cta/Button'

interface FormLayoutProps {
  children: ReactNode
  formTitle?: string
  titleClassName?: string
  buttonClassName?: string
  buttonWidth: number
  buttonHeight: number
  buttonLabel: string
  bgColor?: string
  onSubmit?: (event: React.FormEvent) => void
}

function FormLayout (props: FormLayoutProps) {
  const {
    children,
    formTitle,
    titleClassName,
    buttonClassName,
    buttonWidth,
    buttonHeight,
    buttonLabel,
    bgColor,
    onSubmit
  } = props

  return (
    <form onSubmit={onSubmit}>
      <div className='flex w-72'>
        <div className={`w-full bg-${bgColor} grid place-items-center`}>
          <div className='m-2 text-center w-full h-full inline-grid place-content-center flex-col space-y-6'>
            {formTitle && <Text text={formTitle} className={titleClassName} />}

            {children}

            <Button
              className={buttonClassName}
              width={buttonWidth}
              height={buttonHeight}
              label={buttonLabel}
              type='submit'
            />
          </div>
        </div>
      </div>
    </form>
  )
}

export default FormLayout
