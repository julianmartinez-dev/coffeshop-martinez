import { useContext, useState, useEffect } from 'react';
import { placeOrder } from '../../firebase';
import CoffeeShopContext from '../../context/CoffeeShopProvider';
import CartItem from './CartItem';
import CartTable from './CartTable';
import CheckoutWidget from './CheckoutWidget';
import EmptyCart from './EmptyCart';
import Form from './Form';

import { Slide, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InfoOrder from './InfoOrder';

const Cart = () => {
  const { cart, removeFromCart, subtotal, totalArticles, clearCart } =
    useContext(CoffeeShopContext);

  const [idCompra, setIdCompra] = useState(null);

  useEffect(() => {
    //Scroll to main content
    document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
  }, []);

  const onDelete = (item) => {
    removeFromCart(item);
  };

  const onSubmit = async (name, lastName, email) => {
    const order = cart.map((item) => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      description: item.description,
      id: item.id,
    }));

    try {
      const id = toast.loading('Procesando pedido, gracias por tu compra', {
        type: 'info',
        closeOnClick: true,
        autoClose: true,
        transition: Slide,
      });
      //Send order to firebase
      const numeroOrden = await placeOrder({
        order,
        client: `${name} ${lastName}`,
        email,
        status: 'Generada'
      });
      toast.update(id, {
        render: 'Orden # ' + numeroOrden.id + ' procesada',
        isLoading: false,
        type: 'success',
        closeOnClick: true,
        autoClose: true,
        transition: Slide,
      });

      setIdCompra(numeroOrden.id);
      clearCart();
    } catch (error) {
      toast.update(id, {
        render: 'Error al procesar el pedido',
        isLoading: false,
        type: 'error',
        transition: Slide,
      });
    }
  };
  //if the cart is empty or the purchase is not processed
  if (cart.length === 0 && idCompra === null) {
    return (
      <main>
        <div className="p-3 md:p-0 md:w-1/2 mx-auto mt-10">
          <EmptyCart />
        </div>
      </main>
    );
  }
  //If the cart is not empty or the purchase is processed
  if (cart.length || idCompra) {
    return (
      <main>
        {cart.length ? (
          <div className="text-gray-50 md:w-3/5 mx-auto mt-5">
            <CartTable cart={cart} onDelete={onDelete} clearCart={clearCart} />
            <button className="btn-white w-full md:w-auto mt-5" onClick={clearCart}>
              <span className="font-medium tracking-wider leading-loose">
                x vaciar carrito
              </span>
            </button>
          </div>
        ) : null}

        <div className="mt-10">
          {/* if the purchase is not processes*/}
          {idCompra === null ? (
            <div className="px-3 md:grid grid-cols-2 md:w-4/5 mx-auto">
              <CheckoutWidget
                totalArticles={totalArticles}
                subtotal={subtotal}
              />
              <Form onSubmit={onSubmit} />
            </div>
          ) : (
            /* If the purchase is processed show the final detail */
            <InfoOrder id={idCompra} />
          )}
        </div>

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </main>
    );
  }
};
export default Cart;
