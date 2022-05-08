import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
import Header from './components/Header';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { CoffeeShopProvider } from './context/CoffeeShopProvider';
function App() {

  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}

export default App