import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from './Button'

export const CreateTrip = () => {
  return (
    <div className='h-full'>
        <div className='flex flex-row justify-between items-center px-4 h-[8%]'>
            <ArrowBackIcon fontSize='large'/>
            <h2 className='text-2xl'>New trip</h2>
            <MenuIcon fontSize='large'/>
        </div>
        <div className='flex flex-col justify-between items-center h-[80%] rounded-md m-6 p-4 bg-gray-300'>
            <div className='flex flex-col w-full'>
                <label htmlFor="tripName">Trip Name</label>
                <input type="text" className='rounded-md focus:outline-none focus:ring-2 mb-4 p-1' />
                <label htmlFor="StartDate">Start Date</label>
                <input type="text" className='rounded-md focus:outline-none focus:ring-2 mb-4 p-1' />
                <label htmlFor="EndDate">End Date</label>
                <input type="text" className='rounded-md focus:outline-none focus:ring-2 mb-4 p-1' />
                <label htmlFor="FirstLocation">First Location</label>
                <input type="text" className='rounded-md focus:outline-none focus:ring-2 p-1' />
            </div>
            <Button text={"Create Trip"} />
        </div>
    </div>
  )
}
