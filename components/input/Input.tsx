//Import React
import { InputHTMLAttributes } from 'react';


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    width?: number;
    text_size: string | number;
}

function Input( props: InputProps ){

    const { label, width, text_size,  ...rest } = props;

    return(
        <div>
            {label && <label>{label}</label>}
            <input
            {...rest} 
            className={`border rounded px-2 py-2  focus:outline-none focus:border-gray-300 text-${ text_size } w-${width}`}
            />
        </div>
    )
}

export default Input;



