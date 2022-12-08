import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products'
import Categories from './pages/categories'

function App() {
  return (
    
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/products" element={<Products/>}exact/>
      <Route path="/categories" element={<Categories/>}exact />
    </Routes>
    </div>
   
  
  );
}

export default App;
