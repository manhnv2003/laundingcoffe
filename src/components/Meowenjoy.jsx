import React from 'react'
import cupOpCoffe from '../assets/cupofcoffe.png'

export default function Meowenjoy() {
  return (
    <div className='relative w-4/5 m-auto md:w-max md:h-3/4 md:m-0 text-text-meow md:w-full'>
      <div className='absolute top-20 -right-48 md:-top-24 md:left-1/4'>
        <img src={cupOpCoffe} alt={cupOpCoffe} className='scale-30 md:scale-90'/>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2 flex flex-col bg-meow-bg-left p-10 rounded-t-2xl md:rounded-l-3xl md:rounded-tr-none'>
            <h2 className='text-5xl mb-7 md:text-7xl font-bold'>Meow <br /> Enjoy</h2>
            <hr className='w-6 mb-5'></hr>
            <h4 className='font-medium mb-3 md:mb-5 text-lg'>Todos os sábados e domingos</h4>
            <p className='w-56 h-20'>Venha tomar o seu brunch com a gente!</p>
            <p className='text-text-main font-semibold'>Faça uma reserva {'>'}</p>
        </div>
        <div className='flex flex-col bg-meow-bg-right p-5 pl-20 rounded-b-2xl md:rounded-r-3xl'>
            <h2 className='font-bold text-4xl mb-10'>Onde estamos</h2>
            <hr className='w-3/5 mb-9'/>
            <p className='mb-12 w-56'>Você pode nos encontrar no endereço:</p>
            <div>
            <p className='mb-28'>Rua do Miado 234, Gatolândia</p>
            </div>
        </div>
      </div>
    </div>
  )
}
