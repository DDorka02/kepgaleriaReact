import './App.css';
import Kiskep from './komponensek/Kiskep.js';
import { adatLista } from './adatok.js';
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
              <Kiskep adat={{ src:"../kepek_kicsi/DSC8847", alt:""}} key={0} />
            </div>
            <p>Leírás leírás leírás</p>
        </div>
        <div className="galeria">
            {adatLista.map((elem,index)=> {
              return(<Kiskep adat={elem} key={index}/>)
            })}
          </div>
        </main>
        <footer>
          <p>Dobszay Dorka</p>
        </footer>
    </div>
  );
}

export default App;
