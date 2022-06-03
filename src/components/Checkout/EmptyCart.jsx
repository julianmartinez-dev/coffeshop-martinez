import { Link } from 'react-router-dom';
const EmptyCart = () => {
  return (
    <div className="p-3 md:p-0 text-slate-300">
      <h1 className="text-4xl">Oops, el carrito esta vacío.</h1>
      <p className="text-xl mb-3">
        Comienza agregando productos y los verás aquí.
      </p>
      <img
        src="/img/carrito_vacio.svg"
        alt="imagen carrito vacio"
        className="mb-5"
      />
      <Link to={'/'} className="btn-white flex justify-center">
        Ir a la pagina de inicio
      </Link>
    </div>
  );
};

export default EmptyCart;
