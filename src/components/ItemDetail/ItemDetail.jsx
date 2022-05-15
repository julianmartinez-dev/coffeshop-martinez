import { useContext } from 'react';
import CoffeeShopContext from '../../context/CoffeeShopProvider';
import { priceFormat } from '../../helpers/priceFormat';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {

  const { addToCart } = useContext(CoffeeShopContext);

  const onAdd = (quantityToAdd) => {
    addToCart({ ...item, quantity: quantityToAdd })
  }

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
                className={`badge ${
                  item.stock ? 'badge-success' : 'badge-error'
                }`}
              >
                {item.stock ? 'Disponible' : 'Sin Stock'}
              </div>
              <div className="badge badge-warning">{item.category}</div>
            </div>

            <div className="md:flex justify-between">
              <p className="text-3xl font-bold text-slate-300 mb-5 md:mb-0">
                {priceFormat(item.price)}
              </p>

              <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemDetail