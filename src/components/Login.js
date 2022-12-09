import React, {useEffect, useState} from 'react';
import LoginForm from './LoginForm';
import Signup from './Signup'
import ProductNav from "../components/ProductNav";

function Login() {
    
    const [currentForm, setCurrentForm] = useState('login');
    const [newLogin, setNewLogin] = useState([]);

    const toggleForm = (formName) => {
      setCurrentForm(formName);
    }

    return(
     <div className="App">
      <ProductNav />
      {
        currentForm === "login" ? <LoginForm onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm} />
      }
    </div>

        )
}

export default Login