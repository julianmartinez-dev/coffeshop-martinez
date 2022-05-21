import { priceFormat } from "../../helpers/priceFormat";

const CheckoutWidget = ({clearCart,totalArticles,subtotal}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-10 border-t-2">
      <button
        className="font-medium text-slate-300 tracking-wider leading-loose flex flex-row items-center self-start p-3"
        onClick={clearCart}
      >
        x vaciar carrito
      </button>
      <div className="p-3 md:w-2/5 justify-between">
        <div className="flex justify-between">
          <p>Cantidad de Items:</p>
          <p>{totalArticles}</p>
        </div>
        <div className="flex justify-between">
          <p>Gastos de envio:</p>
          <p>Gratis</p>
        </div>
        <div className="flex justify-between text-2xl mt-3">
          <p className="uppercase font-bold">Total a pagar</p>
          <p>{priceFormat(subtotal)}</p>
        </div>
        <button className="btn-white w-full text-center bg-transparent/40 mt-3">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CheckoutWidget