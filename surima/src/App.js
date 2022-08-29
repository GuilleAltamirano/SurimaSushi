import './styles/app.scss';
import Navbar from './components/Navbar/Navbar.jsx';
import IconosFlotantes from "./components/IconosFlotantes/IconosFlotantes.jsx";
import { Productos } from "./components/Productos/Productos";
import { Contador } from "./components/Contador/Contador";

//import img de productos
import gohan from "./components/Productos/img/Gohan.JPG";
import empanadas from "./components/Productos/img/Empanadas.JPG";
import piezas from "./components/Productos/img/Piezas.JPG";


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Navbar />
        <IconosFlotantes />
      </header>
      <section className="sectionProductos">
        <Productos
          imagen={gohan}
          title="Gohan Surima"
          description="asfsadfsd"
        />
        <Productos
          imagen={empanadas}
          title="Empanadas Chinas Surima"
          description="asfsadfsd"
        />
        <Productos
          imagen={piezas}
          title="30 piezas Surima"
          description="asfsadfsd"
        />
        <Productos
          imagen={gohan}
          title="Gohan Surima"
          description="asfsadfsd"
        />
        <Productos
          imagen={empanadas}
          title="Empanadas Chinas Surima"
          description="asfsadfsd"
        />
        <Productos
          imagen={piezas}
          title="30 piezas Surima"
          description="asfsadfsd"
        />
      </section> */}
      <Contador/>
    </div>
  );
};

export default App;
