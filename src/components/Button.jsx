import React from 'react'

export const Button = ({ variant = 'default', onClick, text }) => {
    // default button
    const baseStyle = 'w-full py-1 rounded-lg text-lg  border border-2 hover:text-transparent hover:bg-clip-text';
    // button variants
    const variants = {
        "default" : "bg-gradient-to-r from-wandernest-blue to-wandernest-pink text-white",
        "inverse": 'text-transparent bg-clip-text',
        "red" : "text-white bg-red-500"
    };

    return (
        <button
            className={`${baseStyle} ${variants[variant]}`}
            onClick={() => onClick()}
        >
            {text}
        </button>
    )
}
