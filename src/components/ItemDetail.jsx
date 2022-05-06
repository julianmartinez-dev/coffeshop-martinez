import React from 'react'

import { priceFormat } from '../helpers/priceFormat';

const ItemDetail = ({item}) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden animate__animated animate__fadeIn">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto lg:max-w-xs h-64 object-cover object-center rounded"
            src={`/img/${item.slug}.jpg`}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 md:border-l-2 border-gray-100 ml-2">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {item.brand}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-3">
              {item.name}
            </h1>

            <p className="leading-relaxed">{item.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              {item.stock > 0 ? <p>Disponible</p> : <p>Sin Stock</p>}
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                {priceFormat(item.price)}
              </span>
              <button className="flex ml-auto items-center gap-2 font-bold border-0 py-2 px-4 focus:outline-none rounded btn-cafe">
                Comprar
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
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