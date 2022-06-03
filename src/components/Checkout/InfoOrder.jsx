import React, { useEffect, useState } from 'react';
import { getOrderbyID } from '../../firebase';
import { priceFormat } from '../../helpers/priceFormat';
import Spinner from '../spinner/Spinner';

const InfoOrder = ({ id }) => {
  const [orderData, setOrderData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOrder = async () => {
      //Get the order from firebase and set the state
      const order = await getOrderbyID(id);
      //Calculate the total of the order
      const totalOrder = order.order.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
      //Set the state with the order data and the total
      setOrderData({ order, totalOrder });
      setLoading(false);
    };
    getOrder(id);
  }, []);

  if(loading || !orderData.order) return <Spinner />;

  return (
    <main className="grid md:grid-cols-2 md:w-2/3 mx-auto px-4 text-gray-50 animate__animated animate__fadeIn items-center">
      <div className="text-md order-2">
        <h1 className="text-3xl uppercase underline font-bold mb-3 mt-5">
          Gracias por tu compra
        </h1>
        <h2 className="font-bold mt-5">
          Cliente:{' '}
          <span className="font-normal capitalize">
            {orderData.order.client}
          </span>
        </h2>
        <h3 className="font-bold mt-2">
          ID de la compra:{' '}
          <span className="font-normal bg-yellow-300 p-1 text-gray-800 rounded-md">
            {orderData.order.id}
          </span>
        </h3>
        <h3 className="font-bold mt-2">
          Estado:{' '}
          <span className="font-normal bg-green-400 p-1 text-gray-800 rounded-md">
            {orderData.order.status}
          </span>
        </h3>

        <h2 className="font-bold uppercase mt-10 underline">
          Detalle del pedido:
        </h2>

        <ol className="list-disc mb-10">
          {orderData.order.order.map((item) => (
            <li
              key={item.id}
              className="grid grid-cols-3 gap-2 md:w-3/4 mb-3 mt-5"
            >
              <p className="flex flex-col">
                <span className="font-bold uppercase">Producto </span>
                {item.name}
              </p>
              <p className="flex flex-col">
                <span className="font-bold uppercase">Cantidad </span>
                {item.quantity}
              </p>
              <p className="flex flex-col">
                <span className="font-bold uppercase">Precio unit. </span>
                {priceFormat(item.price)}
              </p>
            </li>
          ))}
        </ol>

        <p className="inline uppercase font-bold text-xl">
          total de la compra{' '}
          <span className="text-black bg-slate-50 px-3 py-1 rounded-md">
            {priceFormat(orderData.totalOrder)}
          </span>{' '}
        </p>

        <p className="border-2 p-3 text-center md:w-2/3 mt-10">
          Un email con los detalles será enviado a: {orderData.order.email}
        </p>
      </div>
      <img
        src="/img/undraw_order_confirmed_re_g0if.svg"
        alt=""
        className="mt-5 md:order-2"
      />
    </main>
  );
};

export default InfoOrder;
