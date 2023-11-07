import React from 'react'
import background from '../assets/Background.png'

export default function Sobre() {
  return (
    <div className='relative h-max text-textsobre top-10'>
      <div className='absolute md:-top-16 left-0 right-0'>
        <img src={background} alt="background" className='object-contain'/>
      </div>
      <div className='relative flex items-start justify-between md:items-center w-3/5 m-auto h-screen'>
       <div className='grid md:grid-cols-2  md:gap-20'>
       <div>
            <p>Sobre nós</p>
            <h3 className='md:text-4xl text-2xl font-bold'>Nós oferecemos uma experiência inesquecível para amantes de café e pais de pet!</h3>
        </div>
        <div>
            <p className='md:mb-7 font-bold'>O melhor lugar para apreciar o seu café</p>
            <p className='leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm.</p>
        </div>
       </div>
      </div>
    </div>
  )
}
