import React, { useState } from 'react'
import devBurgerContext from './devBurgerContext';
import devBurgerFetch from '../axios/config'

function Provider ({children}) {
  const [tableOrder, setTableOrder] = useState({})
  const [selectedProduct, setSelectedProduct] = useState({product: ""})
  const [order, setOrder] = useState([])
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState('')
  const [update, setUpdate] = useState(false)
  const [change, setChange] = useState(false)
  const [product, setProduct] = useState(
    { product:'', price:'', description:'', image:''}
  )
  const [employee, setEmployee] = useState(
    { name:'', email:'', password:'', positionHeld:''}
  )
  
  const getOrder = async () => {
    try {
      const response = await devBurgerFetch.get(`/order/${tableOrder.id}`);
      const { data } = response;

      setOrder(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTableOrder = async (tableId) => {
    try {
      const response = await devBurgerFetch.post(`/table/${tableId}`);
      const { data } = response;
    
      setTableOrder(data);

    } catch (error) {
      console.log(error);
    }
  }

  const getProducts = async () => {
    try {
      const response = await devBurgerFetch.get('/product');
      const { data } = response;

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = {
    setTableOrder,
    tableOrder,
    selectedProduct,
    setSelectedProduct,
    order,
    setOrder,
    getOrder,
    getTableOrder,
    getProducts,
    products,
    token,
    setToken,
    product,
    setProduct,
    employee,
    setEmployee,
    update,
    setUpdate,
    change,
    setChange,
  };

    return (
        <devBurgerContext.Provider value={ contextValue }>
          {children}
        </devBurgerContext.Provider>
      );
}

export default Provider;