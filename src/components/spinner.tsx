import React, { FC } from 'react';
import { ClockLoader } from 'react-spinners';


const Spinner: FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <ClockLoader />
    </div>
  )
}

export default Spinner;