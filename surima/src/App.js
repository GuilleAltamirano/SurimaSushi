import './styles/app.scss';
import Navbar from './components/Navbar/Navbar.jsx';
import IconosFlotantes from './components/IconosFlotantes/IconosFlotantes';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <IconosFlotantes></IconosFlotantes>        
      </header>
    </div>
  );
};

export default App;
