import './App.css';

import ItemListContainer from './components/itemList/ItemListContainer';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <section>
          <ItemListContainer/>
        </section>
      </main>
    </div>
  );
}

export default App;
