//Import React
import { InputHTMLAttributes } from 'react'

//import component
import Text from '../text/Text'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  width?: number
  height?: number
  inputSize: string | number
  labelSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChange?: (e: any) => void
}

function Input (props: InputProps) {
  const { label, width, height, inputSize, labelSize, onChange, ...rest } =
    props

  return (
    <div className='flex flex-col'>
      {label && <Text text={label} size={labelSize} />}
      <input
        {...rest}
        onChange={onChange}
        style={{ width, height }}
        className={`border rounded px-2 py-2  focus:outline-none focus:border-gray-300 text-${inputSize} w-${width}`}
      />
    </div>
  )
}

export default Input
