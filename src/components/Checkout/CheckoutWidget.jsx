import { priceFormat } from '../../helpers/priceFormat';

const CheckoutWidget = ({ totalArticles, subtotal, id = '' }) => {
  return (
    <div className="md:p-10 p-2 flex mt-10 md:mt-0 flex-col justify-center md:w-2/3 mx-auto bg-slate-700/10 text-2xl text-gray-50">
      <h1 className="text-3xl font-bold text-center md:mb-16">
        Resumen del pedido:
      </h1>
      <div className="flex justify-between">
        <p>Cantidad de Items:</p>
        <p>{totalArticles}</p>
      </div>
      <div className="flex justify-between">
        <p>Gastos de envio:</p>
        <p>Gratis</p>
      </div>
      <div className="flex justify-between items-center text-2xl mt-5 pt-5 border-t-2 font-bold">
        <p className="uppercase ">Total a pagar</p>
        <p className="text-3xl">{priceFormat(subtotal)}</p>
      </div>
      <p>{id}</p>
    </div>
  );
};

export default CheckoutWidget;
