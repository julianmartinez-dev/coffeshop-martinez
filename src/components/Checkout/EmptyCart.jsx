import { Link } from "react-router-dom"
const EmptyCart = () => {
  return (
    <div className='p-3 md:p-0'>
        <h1 className='text-4xl'>Oops, el carrito esta vacío.</h1>
        <p className='text-xl mb-3'>Comienza agregando productos y los verás aquí.</p>
        <Link to={'/'} className='btn-white'>Ir a la pagina de inicio</Link>
        <img src='/img/carrito_vacio.svg' alt="imagen carrito vacio" className="mt-3"/>
    </div>
  )
}

export default EmptyCart