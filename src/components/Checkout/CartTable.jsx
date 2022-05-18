import React from 'react'
import CartItem from './CartItem';

const CartTable = ({cart, onDelete}) => {
  return (
    <table class=" w-full">
      <thead>
        <tr className="border-b-2">
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
}

export default CartTable