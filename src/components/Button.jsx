import React from 'react'

export const Button = ({ variant = 'default', text, children, ...props }) => {
    // default button
    const baseStyle = 'px-20 py-2 rounded-full font-semibold bg-gradient-to-r from-wandernest-blue to-wandernest-pink text-white';
    // button variants
    const variants = {

    };

    return (
        <button className={`${baseStyle} ${variants[variant]}`} {...props}>{text}</button>
    )
}
