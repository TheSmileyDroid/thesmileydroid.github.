import foto from './Foto-de-perfil.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="Info">
        <div className="Foto-div">
          <img src={foto} className="Foto" alt="Foto de perfil" />
        </div>
      </div>
    </div>
  );
}

export default App;
