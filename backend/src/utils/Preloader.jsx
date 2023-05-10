import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

export default function Preloader() {
  return (
    <div className='preloader'>
      <RotatingLines
        strokeColor='white'
        strokeWidth='5'
        animationDuration='0.75'
        width='96'
        visible={true}
      />
    </div>
  );
}
