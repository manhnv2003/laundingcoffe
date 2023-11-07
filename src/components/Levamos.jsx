import React from 'react'
import imagelevamos from '../assets/imagelevamos.png'

export default function Levamos() {
  return (
    <div className=' relative grid grid-cols-1 md:grid-cols-2 text-white rounded-[48px] md:h-96  max-w-screen-2xl'
    style={{background: 'linear-gradient(203deg, rgba(243, 199, 196, 0.95) 4.72%, rgba(84, 21, 17, 0.95) 81.94%)'}}>
      <div className='hidden mb-5 md:block'>
        <img src={imagelevamos} alt={imagelevamos} className='absolute -top-8'/>
        </div>
      <div className='flex flex-col text-center md:text-right  mt-20 md:mr-8 '>
        <h3 className='text-5xl font-bold h-16 mx-7 my-12 md:mx-0 md:my-0'>Levamos até você!</h3>
        <p className='mb-16 h-28 mx-16 md:h-14 md:h-0'>Estamos nos principais aplicativos de Delivery!</p>
        <div className='flex justify-center mx-6 mb-14 md:justify-end md:mx-0 md:mb-0'>
        <p className='w-60 p-2 rounded-3xl cursor-pointer text-center bg-white text-black'>Delivery</p>
        </div>
      </div>
    </div>
  )
}
