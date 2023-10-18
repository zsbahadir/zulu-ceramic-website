//Import React 
import { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
width: number;
text_size: string | number;

};

function TextArea( props: TextAreaProps ){
    const { width, text_size, ...rest  } = props;
    return (
        <>
        <textarea {...rest} 
        className={` w-${width} text-${text_size} border rounded px-2 py-2 focus:outline-none focus:border-gray-300 `}/>
        </>
    )
}

export default TextArea;