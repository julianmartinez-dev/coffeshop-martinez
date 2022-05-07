import { priceFormat } from "../helpers/priceFormat";
import { Link } from "react-router-dom";


const Item = ({ brand, name, price, description, slug, id }) => {
  return (
    <div className="card bg-transparent/80 shadow-sm shadow-amber-500/20">
      <figure className="px-10 pt-10 ">
        <img src={`/img/${slug}.jpg`} alt="Shoes" className="rounded-xl h-40" />
      </figure>
      <div className="card-body items-center text-center text-slate-300">
        <h2 className="card-title">{brand}</h2>
        <h3 className=" font-bold text-xl">{name}</h3>
        <p>{description.slice(0, 70) + '...'}</p>
        <div className="mt-3 flex justify-evenly w-full">
          <button className="btn-white">Comprar</button>{' '}
          <Link to={`/item/${id}`}>
            <button className="btn-white">Ver mas</button>{' '}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
