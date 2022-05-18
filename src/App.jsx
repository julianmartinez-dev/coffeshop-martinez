import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Hero from './components/Hero';
import Footer from './components/Footer/Footer';
import { CoffeeShopProvider } from './context/CoffeeShopProvider';
import Error from './components/404';
import Cart from './components/Checkout/Cart';

function App() {

  return (
    <>
      <BrowserRouter>
        <CoffeeShopProvider>
          <Header />
          <Hero />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<Error />} />
          </Routes>
          <Footer />
        </CoffeeShopProvider>
      </BrowserRouter>
    </>
  );
}

export default App