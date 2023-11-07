import React from 'react'

export default function Footer() {
  return (
    <div>
    <div className=' grid grid-cols-1 mx-11 mb-11 md:grid-cols-3 mt-28 gap-11 md:mb-28'>
    <div>
        <h2 className='text-lg font-semibold mb-3'>Informações</h2>
        <div className='w-56'>
        <p className='mb-5'>Todos os direitos reservados Meow Cafe Ltda</p>
        <p>Um lugar perfeito para pais de pets e amantes de café!</p>
        </div>
      </div>
      <div>
      <h2 className='text-lg font-semibold mb-3'>Links Úteis</h2> 
        <p>Início</p>
        <p>Sobre</p>
        <p>Produtos</p>
        <p>Delivery</p>
        <p>Login</p>
      </div>
      <div>
        <h2 className='text-lg font-semibold mb-3'>Institucional</h2>
        <p className='w-56'>CNPJ: XX. XXX. XXX/0001-XX Endereço: Lorem ipsum, 64 Política de Privacidade Dúvidas Frequentes Ajuda Acessibilidade</p>
      </div>
    </div>
    </div>
  )
}
