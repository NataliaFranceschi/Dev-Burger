import React, { useContext } from 'react'
import devBurgerFetch from '../axios/config'
import devBurgerContext from '../context/devBurgerContext'
import { useLocation } from 'react-router-dom';
import '../styles/table.scss';

function Table({title, array}) {
  const location = useLocation()
  const { setProduct, setEmployee, setUpdate, 
    setChange, change, token } = useContext(devBurgerContext)

  const edit = async (id) => {
    try {
      const response = await devBurgerFetch.get(`${location.pathname}/${id}`);
      const { data } = response;

      (location.pathname === '/product') 
      ?setProduct(data)
      :setEmployee(data);

      setUpdate(true)
    } catch (error) {
      console.log(error);
    }
  }

  const deleteObj = async (id) => {
    try {
      await devBurgerFetch.delete(`${location.pathname}/${id}`, 
        {headers: { Authorization: token.token}});
      setChange(!change)

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='table'>
        <table>
          <caption>{title}</caption>
          <thead>
            <tr>
              {Object.keys(array[0]).map((e, index) => <th key={index}>{e}</th>)}
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>     
                {array.map((obj) => 
                  <tr key={obj.id}>{Object.values(obj)
                    .map((e, index) => <td key={index}>{e}</td>)}
                    <td>
                      <button 
                        type='button' 
                        onClick={() => edit(obj.id)}
                        className="edit">
                          Edit
                      </button>    
                      <button 
                        type='button' 
                        onClick={() => deleteObj(obj.id)}
                        className="delete">
                          Delete
                        </button>  
                    </td>  
                  </tr>
                )}
          </tbody>
        </table>
    </div>
  )
}

export default Table