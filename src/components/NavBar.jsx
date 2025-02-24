import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <div className='flex flex-col items-end h-full text-right bg-pink-100'>
            <CloseIcon
                fontSize="large"

            />
            {/* user email goes here after login */}
            <span className='py-16 pr-5 text-2xl underline underline-offset-2'>user email</span>
            <nav className='pr-5 text-2xl'>
                <ul>
                    <li className='pb-10'>
                        <NavLink>Trips</NavLink>
                    </li>
                    <li>
                        <NavLink>Log Out</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
