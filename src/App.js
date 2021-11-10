import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Banners from './components/Home/banners/Banner';
import ItemListContainer from './components/itemList/ItemListContainer';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Banners/>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:id" element={<ItemListContainer />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
