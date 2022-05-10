import { products } from "../data/products";

export const getProductsByCategory = (category) => {
    return new Promise((resolve, reject) => {

      if(category === "Descafeinados"){
        const product = products.filter(product => product.decaf && ['Café Molido', 'Cápsulas'].includes(product.category));
        setTimeout(() => {
          resolve(product);
        }, 2000);
      }  

      const product = products.filter((product) => product.category === category);
      setTimeout(() => {
        resolve(product);
      }, 2000);
    });
}