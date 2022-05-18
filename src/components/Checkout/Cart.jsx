import { useContext } from 'react';
import CoffeeShopContext from '../../context/CoffeeShopProvider';
import CartItem from './CartItem';
import CartTable from './CartTable';
import CheckoutWidget from './CheckoutWidget';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const { cart, removeFromCart, subtotal, totalArticles, clearCart } =
    useContext(CoffeeShopContext);

  const onDelete = (item) => {
    removeFromCart(item);
  };

  return (
    
      <div class="overflow-x-auto  md:w-1/2 mx-auto mt-10 text-slate-300">
        {
          cart.length
          ? 
            <>
              <CartTable cart={cart} onDelete={onDelete} />
              <CheckoutWidget clearCart={clearCart} totalArticles={totalArticles} subtotal={subtotal} />
            </>
          : <EmptyCart />
        }
        
      </div>
    
  );
};
export default Cart;
