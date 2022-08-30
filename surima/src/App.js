import './styles/app.scss';
import Navbar from './components/Navbar/Navbar.jsx';
import IconosFlotantes from "./components/IconosFlotantes/IconosFlotantes.jsx";
import { Productos } from "./components/Productos/Productos";
import { Contador } from "./components/Contador/Contador";

//import img de productos
import gohan from "./components/Productos/img/Gohan.JPG";
import empanadas from "./components/Productos/img/Empanadas.JPG";
import piezas from "./components/Productos/img/Piezas.JPG";

const agregar = (acu) => {
  console.log(acu)
}


function App() {
  return (
    <div className="App">
      <Contador stock={5} agregarProducto={agregar}/>
    </div>
  );
};

export default App;
