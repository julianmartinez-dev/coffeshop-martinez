import { products } from '../data/products';


export const getItemByID = (id) => {
  return new Promise((resolve, reject) => {
    const product = products.find(product => product.id === id);
    setTimeout(() => {
      resolve(product);
    }, 2000);
  });
};
