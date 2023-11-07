import React from 'react'
import imagemhead from '../assets/Imagemheader.png'
export default function Information() {
  return (
    <div className=' w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden'>
      <div className='z-10 mt-9 ml-4'>
        <h4 className='text-[24px] font-[700]'>Sabor inesquecível</h4>
        <h2 className='mb-[12px] text-[32px] leading-8 font-[700] md:text-[80px] md:leading-[70px]'>Meow <br /> Café</h2>
        <p className='font-[400] leading-5 max-w-[50%]'>Um lugar perfeito para pais de pets e amantes de café. Nossa cafeteria tem um espaço confortável para você e seu melhor amigo.</p>
      </div>
      <div className='absolute -top-20 right-0 translate-x-1/2 object-contain md:translate-x-0'>
        <img src={imagemhead} alt="imageahead" className='transform scale-90 '/>
      </div>
    </div>
  )
}
