import React from 'react'
import cafe1 from '../assets/cofe1.png'
import cafe2 from '../assets/cafe2.png'
import cafe3 from '../assets/cafe3.png'
 
const elementMenu = [
    {
        title: 'Capuccino',
        price: 'R$ 24,00',
        desc: 'Café expresso , leite vaporizado, espuma e um toque de caramelo.',
        image: cafe1,
        bg: 'linear-gradient(203deg, #F6C7C5 4.72%, #C27D7A 102.83%)'
    },
    {
        title: 'Café ao Leite',
        price: 'R$ 16,00',
        desc: 'O clássico, amado pelos brasileiros, com um toque de sofisticação!',
        image: cafe2,
        bg: 'linear-gradient(203deg, rgba(250, 250, 250, 0.95) 4.72%, rgba(84, 21, 17, 0.58) 102.83%)'
    },
    {
        title: 'Café Preto',
        price: 'R$ 12,00',
        desc: 'Grãos selecionados feitos no seu método de preparo favorito.',
        image: cafe3,
        bg: 'linear-gradient(203deg, rgba(10, 9, 9, 0.95) 4.72%, rgba(84, 21, 17, 0.95) 102.83%)'
    }
]

export default function Menu() {
   
  return (
    <div className='flex items-center justify-center text-center flex-col'>
        <h3 className='text-[40px] font-bold border-b-2 border-[#3C0E0E] h-[58px] mb-3'>Cafes</h3>
        <p className='font-[600]'>Conheça nossos cafés exclusivos pensados e preparados por nossos baristas renomados.</p>
        <p className='font-bold mt-[30px]'>Veja Todos {'>'}</p>
        <div className='grid grid-cols-1 gap-2 items-center text-center justify-around mt-[49px] md:flex'>
                {
                    elementMenu.map(menu => (
                       <div key={menu.title} style={{background: menu.bg}} 
                       className='w-[313px] h-[458px] text-[#ffff] mr-9 rounded-[48px]'>
                        <div className='h-[40%] mt-6'><img src={menu.image} alt={menu.image} className=''/></div>
                        <p className='mb-[10px]'>{menu.price}</p>
                        <h3 className='text-[32px] font-bold'>{menu.title}</h3>
                        <p className='text-[14px]'>{menu.desc}</p>
                        <p className='mt-[30px] w-[70%] m-auto bg-[#ffff] text-[#3C0E0E] rounded-[25px]'>Delivery</p>
                       </div> 
                    ))
                }
            </div>

    </div>
  )
}
