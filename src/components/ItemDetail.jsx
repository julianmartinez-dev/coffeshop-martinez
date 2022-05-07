import React from 'react'

import { priceFormat } from '../helpers/priceFormat';

const ItemDetail = ({item}) => {
  return (
    <section className="text-slate-300 overflow-hidden animate__animated animate__fadeIn md:mt-24">
      <div className="container px-5 py-24 mx-auto shadow-xl shadow-slate-300/20">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto lg:max-w-xs h-64 object-cover object-center rounded"
            src={`/img/${item.slug}.jpg`}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 md:border-l-2 border-gray-100 ml-2">
            <h2 className="text-md text-slate-300 tracking-widest">
              {item.brand}
            </h2>
            <h1 className="text-slate-300 text-3xl font-medium mb-3 border-b-2 border-gray-100 pb-3">
              {item.name}
            </h1>

            <p className="leading-relaxed">{item.description}</p>
            <div className="flex gap-3 mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div
                className={`badge ${item.stock ? 'badge-success' : 'badge-error'}`}
              >
                {item.stock ? 'Disponible' : 'Sin Stock'}
              </div>
              <div className="badge badge-warning">{item.category}</div>
            </div>

            <div className="flex">
              <span className="text-3xl font-bold text-slate-300">
                {priceFormat(item.price)}
              </span>
              <button className="flex ml-auto items-center gap-2 font-bold btn-cafe btn-white disabled:hidden"
                disabled={!item.stock}
              >
                Comprar
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-slate-300 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5 text-red-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemDetail