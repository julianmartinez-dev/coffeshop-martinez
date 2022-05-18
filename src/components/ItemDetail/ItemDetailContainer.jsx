import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItemByID } from '../../firebase'
import Spinner from '../spinner/Spinner'
import ItemDetail from './ItemDetail'
import Error from '../404'

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true); 
  const [item, setItem] = useState({});

  //get the id from the url
  const { id } = useParams();

  //get the item from the api and set it to the state
  useEffect(() => {
    setLoading(true);
    getItemByID(id).then((data) => {
      setItem(data);
      setLoading(false);
    });
  }, []);

  if(!item){
      return (
        <Error />
      );
  }

  return (
    <div>
      {loading ? <Spinner /> : <ItemDetail item={item} />}
    </div>
  );
}

export default ItemDetailContainer