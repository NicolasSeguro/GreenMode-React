import './App.css';

import ItemListContainer from './components/itemList/ItemListContainer';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <ItemListContainer/>
    </div>
  );
}

export default App;
