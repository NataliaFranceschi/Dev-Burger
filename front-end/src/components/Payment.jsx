import React, { useState, useEffect, useContext } from 'react'
import devBurgerFetch from '../axios/config'
import devBurgerContext from '../context/devBurgerContext'
import { useHistory } from 'react-router-dom';
import { RiAddCircleFill } from "react-icons/ri";
import '../styles/payment.scss';
import '../styles/table.scss';

function Payment() {
  const { tableOrder, token } = useContext(devBurgerContext)
  const [paymentMethod, setPaymentMethod] = useState([]);  
  const [payment, setPayment] = useState([]);  
  const [method, setMethod] = useState(1)
  const [value, setValue] = useState(0)
  const [disabled, setDisabled] = useState(true)
  const history = useHistory();

  const getPaymentMethod = async () => {
    try {
      const response = await devBurgerFetch.get('/payment');
      const { data } = response;

      setPaymentMethod(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPayment = async () => {
    try {
      const response = await devBurgerFetch.get(`/payment/${tableOrder.id}`);
      const { data } = response;

      setPayment(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPaymentMethod()
    getPayment()
  }, [])
  
  useEffect(() => {
    payed()
  }, [payment, tableOrder])

  const handleChange = (method) => {
    setMethod(method)
  }

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const newPayment = await devBurgerFetch.post(`/payment/${tableOrder.id}`,{
        paymentId: Number(method),
        value: Number(value)
      }, {headers: { Authorization: token.token}});
      await setPayment([...payment, newPayment.data])
      setValue(0)

    } catch (error) {
      console.log(error);
    }
  }

  const payed = () => {
    const total = payment.reduce((acc, p) => acc + p.value,0)
    if (tableOrder.total === total){
    return setDisabled(false)
    } return setDisabled(true)
  }

  const methodName = (id) => {
    return paymentMethod.find((method) => method.id === id)
  }

  const checkOut = async () => {
    await devBurgerFetch.put(`/table/${tableOrder.tableId}`,{
      status: "closed"
    })
    history.push('/home');
  }

  return (
    <div className='payment'>
        <form onSubmit={handleClick}>
          <label htmlFor='select-method'>
              <select 
                  name='method' 
                  onChange={ ({target}) => handleChange(target.value)} 
                  value={method}> 
                  {paymentMethod.map((method) => 
                  <option key={method.id}
                      name='method' 
                      value={method.id}>
                      {method.method}
                  </option>)}
              </select>
          </label>
          <label htmlFor="value-input">
              <input
              type="text"
              name="value"
              value={value}
              onChange={ ({target}) => setValue(target.value) }
              />
          </label>
          <button
            type="submit">
            <RiAddCircleFill />
          </button>
        </form>
        <table>
          <caption>Payed</caption>
          <thead>
            <tr>
              <th>{"Method"}</th>
              <th>{"Value"}</th>
            </tr>
          </thead>
          <tbody>      
            {payment.map((p) => (
              <tr key={p.id}>
                <td>{methodName(p.paymentId).method}</td>
                <td>{`$${p.value}`}</td>
              </tr>
            ))
            }
          </tbody>
          <tfoot>
            <tr>
              <td>Sum</td>
              <td>{`$${payment.reduce((acc, p) => acc + p.value,0)}`}</td>
            </tr>
          </tfoot>
        </table>
        <button 
          type='button' 
          className='checkout'
          disabled={disabled}
          onClick={(checkOut)}>Check out</button>
    </div>
  )
}

export default Payment