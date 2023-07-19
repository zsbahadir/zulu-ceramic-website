import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'width' | 'height'> {
  width: number;
  height: number;
}

function Button(props: ButtonProps) {
  //Destruct Props
  const { children, width, height, ...rest } = props;

  return (
    <button
    {...rest}
      style={{ width, height }}
    >
      {children}
    </button>
  );
}

export default Button;

// w-[${width}rem] h-[${height}rem]
