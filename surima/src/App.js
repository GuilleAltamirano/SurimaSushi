import './styles/app.scss';
import Navbar from './components/Navbar/Navbar.jsx';
import IconosFlotantes from "./components/IconosFlotantes/IconosFlotantes.jsx";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {

  return (
    <div className="App">
      <ItemListContainer />
      <ItemDetailContainer />
      
    </div>
  );
};

export default App;
