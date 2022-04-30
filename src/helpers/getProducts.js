import { products } from '../data/products';

export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    }); 
}