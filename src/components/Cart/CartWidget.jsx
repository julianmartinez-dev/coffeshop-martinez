import { useEffect, useState, useContext } from "react";
import CoffeeShopContext from "../../context/CoffeeShopProvider";
import CartListItem from "./CartListItem";
import { priceFormat } from "../../helpers/priceFormat";

const CartWidget = () => {

  const { cart, emptyCart } = useContext(CoffeeShopContext);

  const [subtotal, setSubtotal] = useState(0);
  const [totalArticles, setTotalArticles] = useState(0);

  //Reducer to calculate total articicles
  function totalArticlesQuantity() {
    let result = cart.reduce(
      (acc, art) => acc + art.quantity,
      0
    );
    //Update the state
    setTotalArticles(result);
  }

  //Reducer to calculate subtotal
  function calculateSubtotal() {
    let result = cart.reduce((acc, art) => acc + (art.quantity * art.price), 0);
    //Update the state
    setSubtotal(result);
  }

  useEffect(() => {
    totalArticlesQuantity();
    calculateSubtotal();
  }, [cart]);

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex="0" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-md bg-transparent/80 indicator-item">
            {totalArticles}
          </span>
        </div>
      </label>
      <div
        tabIndex="0"
        className="mt-3 card card-compact dropdown-content w-74 lg:w-[450px] bg-transparent/90 shadow "
      >
        <div className="card-body">
          <span className="font-bold text-xl text-stone-300">
            Total de articulos: {totalArticles}
          </span>
          <span className="text-xl text-stone-300">
            Subtotal: <span className="font-bold">{priceFormat(subtotal)}</span>
          </span>
          <CartListItem />
          <div className="card-actions mt-3">
            <button
              className=" btn-white w-full bg-transparent/40"
              onClick={emptyCart}
            >
              Vaciar Carrito
            </button>
            <button className=" btn-white w-full bg-transparent/40">
              Terminar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartWidget