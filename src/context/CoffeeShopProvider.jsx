import { createContext, useEffect, useState } from 'react';

const CoffeeShopContext = createContext();

const CoffeeShopProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('coffeeCart')) || []
  );

  //set cart to local storage on change
  useEffect(() => {
    localStorage.setItem('coffeeCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    isInCart(item.id)
      ? setCart(updateQuantity(item.id, item.quantity))
      : setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    const cartUpdated = cart.filter((article) => article.id !== item.id);
    setCart(cartUpdated);
  };

  const updateQuantity = (id, quantity) => {
    const cartUpdated = cart.map((article) => {
      if (article.id === id) {
        //if new quantity  is greater than stock, set quantity to stock
        if (article.quantity + quantity > article.stock) {
          article.quantity = article.stock;
          alert(
            'La cantidad excede al stock disponible, se le asigno el stock disponible'
          );
        } else {
          article.quantity += quantity;
        }
      }
      return article;
    });
    return cartUpdated;
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((article) => article.id === id);
  };

  return (
    <CoffeeShopContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CoffeeShopContext.Provider>
  );
};

export { CoffeeShopProvider };
export default CoffeeShopContext;
