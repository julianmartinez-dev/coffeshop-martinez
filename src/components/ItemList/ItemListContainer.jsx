import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../helpers/getProducts";
import { getProductsByCategory } from "../../helpers/getProductsByCategory";
import ItemList from "./ItemList";
import Spinner from "../spinner/Spinner";
import Error from "../404";

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();


  useEffect(() => {
    setLoading(true);

    // if(params.categoryId){
    //   getProductsByCategory(params.categoryId)
    //     .then((data) => setProducts(data))
    //     .catch((error) => console.log(error))
    //     .finally(() => {
    //       setLoading(false)
    //       document.getElementById('items').scrollIntoView({ behavior: 'smooth' });
    //     });
    // }else{
    //   getProducts()
    //     .then((data) => setProducts(data))
    //     .catch((error) => console.log(error))
    //     .finally(() => {
    //       setLoading(false)
    //       document.getElementById('items').scrollIntoView({ behavior: 'smooth' });
    //     });
    // }

    let products;

    params.categoryId
     ? products = getProductsByCategory(params.categoryId)
     : products = getProducts();
     
     products
     .then((data) => setProducts(data))
     .catch((error) => console.log(error))
        .finally(() => {
          setLoading(false)
          document.getElementById('items').scrollIntoView({ behavior: 'smooth' });
        });
    
  },[params])


  if (!products.length && !loading) {
    return <Error />
  }


  return (
    <div id='items'>
      <h1 className="text-center text-4xl py-5 font-bold bg-gray-50">
        {params.categoryId ? params.categoryId : "Todos los productos"}
      </h1>
      <main className="px-3">
        {loading ? <Spinner /> : <ItemList products={products} />}
      </main>
    </div>
  );
}

export default ItemListContainer