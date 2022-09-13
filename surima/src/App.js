import './styles/app.scss';
import Navbar from "./components/Navbar/Navbar";
import IconosFlotantes from "./components/IconosFlotantes/IconosFlotantes";
import { SectionConocenos } from "./components/SectionConocenos/SectionConocenos";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { CartContainer } from './components/CartContainer/CartContainer';
import { CartProvider } from "./context/CartContext";



function App() {
  const cambiarNavbar = ()=> {
    console.log("cambio")
  }

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <div onScroll={cambiarNavbar} value={[]}>
              <Navbar />
              <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/Productos/' element={<ItemListContainer />} />
                <Route path='/Productos/:tipoProducto' element={<ItemDetailContainer/>} />
                <Route path='/CartContainer' element={<CartContainer/>} />
              </Routes>
              <IconosFlotantes/>
          </div>
        </BrowserRouter>
      </CartProvider>
      
    </>
  );
};

export default App;
