import './styles/app.scss';
import {useState} from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import IconosFlotantes from "./components/IconosFlotantes/IconosFlotantes.jsx";
import { Productos } from "./components/Productos/Productos";
import { Contador } from "./components/Contador/Contador";

//import img de productos
import gohan from "./components/Productos/img/Gohan.JPG";
import empanadas from "./components/Productos/img/Empanadas.JPG";
import piezas from "./components/Productos/img/Piezas.JPG";




function App() {
  const [numeroProductos, setNumerosProductos] = useState(0);

  const agregar = (acu) => {
    setNumerosProductos(acu)
  }

  console.log("numeroProductos", numeroProductos)
  
  return (
    <div className="App">
      <Contador stock={5} agregarProducto={agregar}/>
    </div>
  );
};

export default App;
