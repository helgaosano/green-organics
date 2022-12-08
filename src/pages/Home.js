import React from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import About from "../components/About";

function Home(){
  
    let navigate=useNavigate();
  return (
        <>
        <Navbar/>

        <div className='Home text-center'>
         <p className='text'>
          Freshly produced products.<br/>From small organic farms<br/>to your table.
         </p> 
        <button onClick={() => {navigate ('/products')} }  type="button" className="btn btn-success mt-3">Click for More</button> 
        </div>
         
        <About/>
        </>
  )
}

export default Home;