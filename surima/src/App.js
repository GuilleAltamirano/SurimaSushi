import './styles/app.scss';
import Navbar from './components/Navbar/Navbar.jsx';
import IconosFlotantes from "./components/IconosFlotantes/IconosFlotantes.jsx";
import CarouselComponent from "./components/CarouselComponent/CarouselComponent";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <IconosFlotantes/> 
      </header>
      <section>
        <CarouselComponent/>
      </section>

        
    </div>
  );
};

export default App;
