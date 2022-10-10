import './styles/app.scss';
import {Navbar} from "./components/Navbar/Navbar";
import IconosFlotantes from "./components/IconosFlotantes/IconosFlotantes";
import { SectionConocenos } from "./components/SectionConocenos/SectionConocenos";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContainer } from './components/CartContainer/CartContainer';
import { CartProvider } from "./context/CartContext";
import { SectionOfrecemos } from './components/SectionOfrecemos/SectionOfrecemos';
import { HomeContainer } from './components/HomeContainer/HomeContainer';



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomeContainer/>}/>
          <Route path='/conocenos' element={<SectionConocenos/>}/>
          <Route path='/productos' element={<SectionOfrecemos/>}/>
          <Route path='/pedir' element={<ItemListContainer/>}/>
          <Route path='/contacto' element={<Footer/>}/>
          <Route path='/productos/:productId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartContainer/>}/>
        </Routes>
        <IconosFlotantes/>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
