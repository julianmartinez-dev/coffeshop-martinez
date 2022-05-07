import React from 'react'

const CartWidget = () => {
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
          <span className="badge badge-md bg-transparent/80 indicator-item">0</span>
        </div>
      </label>
      <div
        tabIndex="0"
        className="mt-3 card card-compact dropdown-content w-64 lg:w-96 bg-transparent/90 shadow"
      >
        <div className="card-body text-stone-300">
          <span className="font-bold text-xl "># Items</span>
          <span className='text-md'>Subtotal: $#</span>
          <div className="card-actions">
            <button className=" btn-white w-full bg-transparent/40">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartWidget