import { useState, useEffect } from "react";
import { getProducts } from "../helpers/getProducts";
import ItemList from "./ItemList";
import Spinner from "./spinner/Spinner";

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
    <main className=" min-h-screen px-3">
      
      <h1 className="text-center text-4xl pt-5 font-bold">Los artículos más populares</h1>
        {
          loading ? <Spinner /> : <ItemList products={products} />
        } 
    </main>
  );
}

export default ItemListContainer