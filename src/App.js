import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './Product'
import Cart from './pages/Cart'
import Login from './components/Login';
import { useState, useEffect} from 'react';

function App() {

//   const[newLogin, setNewLogin] = useState()
//   useEffect(()=>{
    
//   })

// if (!newLogin){
//   return <Login setNewLogin = {setNewLogin}/>
// }


  return (
    // <BrowserRouter>
    <div className="App">
    <Routes>
      {/* <Route path="/" element={<Login />} exact /> */}
      <Route path="/" element={<Home />} exact />
      <Route path="/products" element={<Products/>}exact/>
      <Route path="/carts" element={<Cart/>}exact />
    </Routes>
    </div>
    /* // </BrowserRouter> */

  
  );
}

export default App;
