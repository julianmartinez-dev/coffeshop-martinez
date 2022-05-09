import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import Hero from './components/Hero';
import Footer from './components/Footer';
<<<<<<< HEAD
import { CoffeeShopProvider } from './context/CoffeeShopProvider';
=======
import Error from './components/404';
>>>>>>> master
function App() {

  return (
    <>
      <BrowserRouter>
<<<<<<< HEAD
        <CoffeeShopProvider>
          <Header />
          <Hero />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
          <Footer />
        </CoffeeShopProvider>
=======
      <Header />
      <Hero />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error />} />
        </Routes>
      <Footer />
>>>>>>> master
      </BrowserRouter>
    </>
  );
}

export default App