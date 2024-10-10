import './App.css';
import Kiskep from './komponensek/Kiskep.js';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <h1>Képgaléria</h1>
        </header>
        <main className="App-main">
          <div className="fokep">
            <h3>Kép címe</h3>
            <div className="kiemelt">
              <Kiskep></Kiskep>
            </div>
            <p>Leírás leírás leírás</p>
        </div>
        <div className="galeria">
        <Kiskep></Kiskep>
        <Kiskep></Kiskep>
        <Kiskep></Kiskep>
        <Kiskep></Kiskep>
          </div>
        </main>
        <footer>
          <p>Dobszay Dorka</p>
        </footer>
    </div>
  );
}

export default App;
