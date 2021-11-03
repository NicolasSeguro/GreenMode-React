import './App.css';

import Banners from './components/Home/banners/Banner';
import ItemListContainer from './components/itemList/ItemListContainer';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Banners/>
        <ItemListContainer items='Productos'/>
    </div>
  );
}

export default App;
