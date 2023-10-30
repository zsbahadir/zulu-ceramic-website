import { ButtonHTMLAttributes } from 'react'

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'width' | 'height'> {
  width: number
  height: number
  label: string
  icon?: any
  iconClassName?: string
  onClick?: () => void
  // type?: '"button" | "submit" | "reset" | undefined'
}

function Button (props: ButtonProps) {
  //Destruct Props
  const {
    children,
    width,
    height,
    label,
    icon,
    iconClassName,
    onClick,
    type,
    ...rest
  } = props

  return (
    <button onClick={onClick} {...rest} style={{ width, height }}>
      <div className='flex items-center justify-evenly'>
        {label}
        {icon && <span className={iconClassName}>{icon}</span>}
        {children}
      </div>
    </button>
  )
}

export default Button
