import React from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const Trip = () => {
  return (
    <div className='bg-white rounded-lg flex flex-row justify-between items-center p-2 border border-2 border-transparent hover:border-wandernest-purple hover:cursor-pointer'>
        <span className='text-xl w-[60%]'>temporary trip name</span>
        <div className='flex flex-row justify-center items-center'>
        <span>01-01-2025</span>
        <ArrowRightIcon fontSize='medium'/>
        <span>01-10-2025</span>
        </div>
        
    </div>
  )
}
