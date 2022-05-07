import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
import Header from './components/Header';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import Hero from './components/Hero';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
      <Hero />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      <Footer />
      </BrowserRouter>
      {/* <ItemListContainer /> */}
    </>
  );
}

export default App