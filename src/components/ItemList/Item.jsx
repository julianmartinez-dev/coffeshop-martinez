import { Link } from 'react-router-dom';
import CoffeeShopContext from '../../context/CoffeeShopProvider';
import { useContext } from 'react';

const Item = ({ item }) => {
  const { addToCart } = useContext(CoffeeShopContext);

  const { brand, name, description, slug, id } = item;

  return (
    <div className="card bg-transparent/80 shadow-sm shadow-amber-500/20">
      <figure className="px-10 pt-10 ">
        <img src={`/img/${slug}.jpg`} alt="Shoes" className="rounded-xl h-40" />
      </figure>
      <div className="card-body items-center text-center text-slate-300">
        <h2 className="card-title">{brand}</h2>
        <h3 className=" font-bold text-xl">{name}</h3>
        <p>{description.slice(0, 70) + '...'}</p>

        <Link to={`/item/${id}`}>
          <button className="btn-white mt-5">Ver mas</button>{' '}
        </Link>
      </div>
    </div>
  );
};

export default Item;
