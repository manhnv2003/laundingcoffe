import React from 'react'
import banh1 from '../assets/banh1.png'
export default function Croissants() {
  return (
    <div className='grid grid-cols-1 md:flex items-center justify-between text-[#4D1D1D]'>
      <div className='text-center flex flex-col md:text-left'>
        <p className='w-[98px] text-[#F9C4C4] bg-[#ffff] text-center mb-[7px]'>R$ 12,00</p>
        <h2 className='text-[80px] font-bold'>Croissants</h2>
        <p className='m-auto w-9 h-1 bg-[#000] md:m-0'></p>
        <h4 className='text-[40px]'>Conheça nossa receita</h4>
        <p>A nossa receita de Croissant vai te surpreender. Croissants clássicos ou recheados!</p>
        <p className='font-bold'>Todos os croissants {'>'}</p>
      </div>
      <div>
        <img src={banh1} alt={banh1}/>
      </div>
    </div>
  )
}
