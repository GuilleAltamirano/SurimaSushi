import './styles/app.scss';
import Navbar from "./components/Navbar/Navbar";
import IconosFlotantes from "./components/IconosFlotantes/IconosFlotantes";
import { SectionConocenos } from "./components/SectionConocenos/SectionConocenos";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path='/Productos' element={<ItemListContainer />} />
            <Route path='/Productos/:Producto' element={<ItemDetailContainer/>} />
          </Routes>
          <IconosFlotantes />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
