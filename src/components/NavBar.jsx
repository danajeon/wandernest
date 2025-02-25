import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom'

export const NavBar = ({ handleNavBar }) => {
    return (
        <div className='flex flex-col items-end h-full w-full text-right bg-[rgba(255,255,255,.3)] px-4 py-3'>
            <CloseIcon
                fontSize="large"
                sx={{
                    cursor: "pointer",
                }}
                onClick={handleNavBar}
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
