import { useState, useEffect } from "react";
import { getProducts } from "../../helpers/getProducts";
import ItemList from "./ItemList";
import Spinner from "../spinner/Spinner";

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then(data => setProducts(data))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  },[])


  return (
    <>
      <h1 className="text-center text-4xl py-5 font-bold bg-gray-50">
        Los artículos más populares
      </h1>
      <main className="px-3">
        {loading ? <Spinner /> : <ItemList products={products} />}
      </main>
    </>
  );
}

export default ItemListContainer