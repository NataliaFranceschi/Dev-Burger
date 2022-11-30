import React, { useState, useEffect, useContext } from 'react'
import devBurgerFetch from '../axios/config'
import devBurgerContext from '../context/devBurgerContext'
import { useHistory } from 'react-router-dom';
import '../styles/tables.scss';

function Tables() {
    const { getTableOrder } = useContext(devBurgerContext) 
    const [tables, setTables] = useState([]);
    const [activeTables, setActiveTables] = useState([]);
    const history = useHistory();

    const getTables = async () => {
      try {
        const response = await devBurgerFetch.get('/table');
        const { data } = response;
  
        setTables(data);
      } catch (error) {
        console.log(error);
      }
    };

    const getActiveTables = async () => {
      try {
        const response = await devBurgerFetch.get('/order');
        const { data } = response;
  
        setActiveTables(data);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
        getTables()
        getActiveTables()
      }, [])

    const handleClick = async (tableId) => {
      await getTableOrder(tableId)
      history.push('/order');
    }

    const active = (id) => {
      return activeTables.filter((table) => id === table.tableId )
    }

  return (
    <div className='tables'>
      {tables.map((table) => {
        return (
          <button 
            type='button' 
            key={table.id}
            className={ (active(table.id).length)? 'active': 'empty'}
            onClick={() => handleClick(table.id)}>
                <p>{`Table ${table.number}`}</p>
                {(!active(table.id).length)&&<span>Empty</span>}
          </button>
        )
      })}
    </div>
  )
}

export default Tables