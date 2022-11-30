import React, { useEffect, useState, useContext } from 'react'
import devBurgerFetch from '../axios/config'
import Nav from '../components/Nav'
import Header from '../components/Header'
import devBurgerContext from '../context/devBurgerContext'
import '../styles/home.scss';
import '../styles/form.scss';

function Revenue() {
  const { token } = useContext(devBurgerContext) 
  const [orders, setOrders] = useState([]); 
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [disabled, setDisabled] = useState(true)
  
  const getRevenue = async () => {
    try {
      const response = await devBurgerFetch.get('order/search', { params: { q: `${year}-${month}` } });
      const { data } = response;
  
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = ({target}) => {
      if(target.name === "year"){
        setYear(target.value)
      } if (target.name === "month"){
        setMonth(target.value)}
    if (month !== "" && year !== ""){
      setDisabled(false)
    }
  } 
  
  useEffect(() => {
   getRevenue()
  }, [])

  if (token.positionHeld === "Manager"){
  return (
    <div>
      <Header />
        <div className='home'>
          <Nav />
          <div className='revenue'>
            <form>
              <input 
                type='number' 
                placeholder='Month'
                name='month'
                value={month} 
                onChange={handleClick}/>
              <input 
                type='number' 
                placeholder='Year'
                name='year'
                value={year} 
                onChange={handleClick}/>
              <button type='button' onClick={getRevenue} disabled={disabled}>Search</button>
            </form>
            <div className='table'>
              <table>
                <caption>Revenue</caption>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>tableId</th>
                    <th>date</th>
                    <th>total</th>
                  </tr>
                </thead>
                <tbody>     
                {(orders.length) ? orders.map((obj) => 
                  <tr key={obj.id}>
                    <td>{obj.id}</td>
                    <td>{obj.tableId}</td>
                    <td>{obj.createdAt}</td>
                    <td>{obj.total}</td>
                  </tr>
                )
                :<tr>
                {Array(4).fill("-").map((e, index) => <td key={index}>{e}</td>)}
                </tr>}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={3}>Sum</td>
                    <td>{`$${orders.reduce((acc, order) => acc + order.total,0).toFixed(2)}`}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
    </div>
      )}
    }  


export default Revenue