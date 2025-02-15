import React from 'react'

export const Button = ({ variant = 'default', text, children, ...props }) => {
    // default button
    const baseStyle = 'px-20 py-2 rounded-2xl text-xl bg-gradient-to-r from-wandernest-blue to-wandernest-pink text-white';
    // button variants
    const variants = {
        "inverse": 'text-transparent bg-clip-text'
    };

    return (
        <button className={`${baseStyle} ${variants[variant]}`} {...props}>{text}</button>
    )
}
