import React from 'react'

export const Button = ({ variant = 'default', onClick, text }) => {
    // default button
    const baseStyle = 'w-[200px] py-1 rounded-lg text-lg bg-gradient-to-r from-wandernest-blue to-wandernest-pink text-white border   hover:text-transparent hover:bg-clip-text';
    // button variants
    const variants = {
        "inverse": 'text-transparent bg-clip-text'
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
