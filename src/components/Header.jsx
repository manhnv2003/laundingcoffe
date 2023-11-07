import React from 'react'
import Navbar from './Navbar'
import logo from '../assets/logo.png'
export default function Header() {
  return (
    <div className='relative flex items-center justify-between text-[20px] z-10'>
       <div className='relative flex items-center justify-between'>
       <div className='flex items-center '>
            <img src={logo} alt="logo" className='w-16 h-16'/>
            <h3 className='mr-[20px] text-[16px] font-bold md:text-[24px]'>Meow Café</h3>
        </div>
        <ul className='hidden sm:flex'>
           <Navbar /> 
        </ul>  
       </div>
       <div className='flex items-center'>
        <a href='' className='mr-3 hidden md:flex'>Login</a>
        <button className='w-[70px] h-[23px] text-[15px] bg-[#431B1B] text-[#ffff] inline-block rounded-[39px] shadow-2xl shadow-[#908686fa] md:w-[132px] md:h-[34px]'>Delicery</button>
       <div className='flex items-center ml-3 mr-4 md:hidden cursor-pointer'>
        <ul>
          <li className='w-8 mb-1 h-1 bg-[#431B1B]'></li>
          <li className='w-8 mb-1 h-1 bg-[#431B1B]'></li>
          <li className='w-8 mb-1 h-1 bg-[#431B1B]'></li>
        </ul>
       </div>
       </div>
    </div>
  )
}
