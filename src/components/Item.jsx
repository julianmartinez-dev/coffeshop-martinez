import { priceFormat } from "../helpers/priceFormat";

const Item = ({ brand, name, price, description, slug }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={`src/assets/img/${slug}.jpg`}
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {brand}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
        <p className="mt-1 font-bold text-xl">{priceFormat(price)}</p>
        <p className="mt-2">{description.slice(0, 35) + '...'}</p>
      </div>
      <div className="flex justify-around mt-4">
        <button className="btn-cafe">Ver mas</button>
        <button className="btn-cafe">Comprar</button>
      </div>
    </div>
  );
};

export default Item;
