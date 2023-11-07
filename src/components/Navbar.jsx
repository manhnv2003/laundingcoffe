import React from 'react'

export default function Navbar() {
    const elementNavbar = [
            'Iniscio',
            'Produtos',
            'Sobre'
    ]
  return (
    <div>
      {elementNavbar.map(nav => (
        <a key={nav} href='' className='border-b-4 border-transparent hover:border-b-8 mr-[42px]'>
            {nav}
        </a>
      ))}
    </div>
  )
}
