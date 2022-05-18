import React from 'react'

const EmptyCart = () => {
  return (
    <div className='p-3 md:p-0'>
        <h1 className='text-4xl'>Oops, el carrito esta vacío.</h1>
        <p className='text-xl mb-3'>Comienza agregando productos y los verás aquí.</p>
        <img src='/img/carrito_vacio.svg' alt="imagen carrito vacio"/>
    </div>
  )
}

export default EmptyCart