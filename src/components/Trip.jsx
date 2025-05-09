import React, { useEffect, useState } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const Trip = ({ tripId, name, startDate, endDate, passed, checkboxTrigger, boxChecked }) => {
  const [bgColor, setBgColor] = useState('white');
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (passed === true) {
      setBgColor('lightGrey');
    }
  });

  useEffect(() => {
    boxChecked(tripId, isChecked)
  }, [isChecked]
  );

  return (
    <div
      className='rounded-lg flex flex-row justify-between items-center p-2 border border-2 border-transparent hover:border-wandernest-purple hover:cursor-pointer'
      style={{ backgroundColor: bgColor }}
    >
      {checkboxTrigger &&
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
      }
      <span className='text-xl w-[60%]'>&nbsp;{name}</span>
      <div className='flex flex-row justify-center items-center'>
        <span>{startDate}</span>
        <ArrowRightIcon fontSize='medium' />
        <span>{endDate}</span>
      </div>

    </div>
  );
};