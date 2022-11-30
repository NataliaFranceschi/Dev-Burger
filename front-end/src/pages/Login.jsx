import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/login.scss';
import Logo from '../logoVermelho.png'
import devBurgerFetch from '../axios/config'
import devBurgerContext from '../context/devBurgerContext'

function Login () {
  const { setToken } = useContext(devBurgerContext)
  const [employee, setEmployee] = useState({email:"", password:""});
  const [alert, setAlert] = useState('')
  const history = useHistory();

    const getToken = async (event) => {
      event.preventDefault();
      try {
        const response = await devBurgerFetch.post('/login', employee);
        const { data } = response;
        
        setToken(data);
        setAlert('')
        history.push('/home');

      } catch (error) {
        setAlert(error.response.data.message)
      }
    };

  return (
    <div className="login" onSubmit={getToken}>
        <form >
          <img src={Logo} alt='logo'/>
          <label htmlFor="email-input">
            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={ ({target}) => setEmployee({...employee, email: target.value}) }
              placeholder="E-mail"
            />
          </label>
          <label htmlFor="password-input">
            <input
              type="password"
              name="password"
              value={employee.password}
              onChange={ ({target}) => setEmployee({...employee, password: target.value}) }
              placeholder="Password"
            />
          </label>
          <span>{alert}</span>
          <button
            type="submit"
          >
            Enter
          </button>
        </form>
      </div>
  )
}

export default Login;