import React from 'react';
import { priceFormat } from '../../helpers/priceFormat';

const deleteIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);

const CartItem = ({ item, onDelete }) => {
  const { brand, name, price, quantity, slug } = item;

  return (
    <tr className="text-center">
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 md:w-24 h-24">
              <img src={`/img/${slug}.jpg`} alt={`imagen de ${name}`} />
            </div>
          </div>
          <div className="md:pl-10">
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{brand}</div>
          </div>
        </div>
      </td>
      <td>
        <p>{priceFormat(price)}</p>
      </td>
      <td>{quantity}</td>
      <td>
        <p>{priceFormat(price * quantity)}</p>
      </td>
      <td>
        <button onClick={() => onDelete(item)}>{deleteIcon}</button>
      </td>
    </tr>
  );
};

export default CartItem;
