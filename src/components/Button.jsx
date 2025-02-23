import React from 'react'

export const Button = ({ variant = 'default', onClick, text }) => {
    // default button
    const baseStyle = 'w-[200px] py-2 rounded-2xl text-lg bg-gradient-to-r from-wandernest-blue to-wandernest-pink text-white transition-all duration-150 hover:border-2';
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
