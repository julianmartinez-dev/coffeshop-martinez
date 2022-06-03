import { createContext, useEffect, useState } from 'react';

const CoffeeShopContext = createContext();

const CoffeeShopProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('coffeeCart')) || []
  );
  const [subtotal, setSubtotal] = useState(0);
  const [totalArticles, setTotalArticles] = useState(0);

  //set cart to local storage on change
  useEffect(() => {
    localStorage.setItem('coffeeCart', JSON.stringify(cart));
    setSubtotal(calculateSubtotal());
    setTotalArticles(totalArticlesQuantity());
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

  //Reducer to calculate total articicles
  function totalArticlesQuantity() {
    return cart.reduce((acc, art) => acc + art.quantity, 0);
  }

  //Reducer to calculate subtotal
  function calculateSubtotal() {
    return cart.reduce((acc, art) => acc + art.quantity * art.price, 0);
  }

  return (
    <CoffeeShopContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        subtotal,
        totalArticles,
      }}
    >
      {children}
    </CoffeeShopContext.Provider>
  );
};

export { CoffeeShopProvider };
export default CoffeeShopContext;
