import './styles/app.scss';
import {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import IconosFlotantes from "./components/IconosFlotantes/IconosFlotantes.jsx";
import { Card } from "./components/Productos/Card";
import { Productos } from "./components/Productos/contenedor";


function App() {
  const [list, setList] = useState([]);
  
  //Promesa
  const obtenerProducto = () => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Productos)
      }, 3000);
    })
  }

  useEffect(() => {
    const functionAsync = async()=>{
      try {
        const listado = await obtenerProducto();
        setList(listado);
      } catch (error) {
        alert("hubo un error");
      }
    };
    functionAsync()
  }, [])

  return (
    <div className="App">
      <section className='sectionProductos'>
        {
          list.map((item) => {
            return(
              <Card producto={item} />
            )
          })
        }
      </section>
    </div>
  );
};

export default App;
