import { createContext, useEffect, useState } from 'react';
import { getProducts } from '../helpers/getProducts';

const CoffeeShopContext = createContext();

const CoffeeShopProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('coffeeCart')) || []
  );

  const [products, setProducts ] = useState([]);
  const [alert, setAlert] = useState({});

  useEffect(() => {
    getProducts().then(products => setProducts(products));
  },[])
  
  //set cart to local storage on change
  useEffect(() => {
    localStorage.setItem('coffeeCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    //Check if the item is out of stock
    if (!item.stock)
      return setAlert({
        message: `${item.name} se encuentra fuera de stock`,
        error: true,
      });

    //Check if the item is already in the cart
    if (cart.some((article) => article.id === item.id)) {
      //If it is, increase the quantity
      const cartUpdated = cart.map((article) => {
        if (article.id === item.id) {
          article.quantity += 1;
        }
        return article;
      });
      setCart(cartUpdated);

      //If the item is not in the cart, add it
    } else {
      setCart([...cart, item]);
    }
    setAlert({ message: 'Item agregado al carrito', error: false });

    setTimeout(() => {
        setAlert({});
    }, 3000);
  };

  const removeFromCart = (item) => {
    const cartUpdated = cart.filter((article) => article.id !== item.id);
    setCart(cartUpdated);
  };

  const updateQuantity = (item) => {
    const cartUpdated = cart.map((article) => {
      if (article.id === item.id) {
        article.quantity = item.quantity;
      }
      return article;
    });
    setCart(cartUpdated);
  };

  const emptyCart = () => {
    setCart([]);
  }

  return (
    <CoffeeShopContext.Provider
      value={{
        cart,
        products,
        addToCart,
        removeFromCart,
        updateQuantity,
        emptyCart
      }}
    >
      {children}
    </CoffeeShopContext.Provider>
  );
};

export { CoffeeShopProvider };
export default CoffeeShopContext;
