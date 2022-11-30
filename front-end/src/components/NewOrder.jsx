import React, { useState, useContext, useEffect } from 'react'
import devBurgerContext from '../context/devBurgerContext'
import devBurgerFetch from '../axios/config'
import { RiAddCircleFill } from "react-icons/ri";
import '../styles/newOrder.scss';

function NewOrder() {
  const { selectedProduct, setSelectedProduct, tableOrder, 
    getTableOrder, order, getOrder, token } = useContext(devBurgerContext)
  const [quantity, setQuantity] = useState('');

  const handleClick = async(event) => {
    event.preventDefault();
    const productAlreadAdd = order[0].products.find((e) => e.id === selectedProduct.id)
    try {
      if(productAlreadAdd !== undefined){
        await devBurgerFetch.put(`/order/${tableOrder.id}`,{
          productId: selectedProduct.id,
          quantity: Number(quantity) + Number(productAlreadAdd.OrderProduct.quantity)
        }, {headers: { Authorization: token.token}});
         return await getOrder()

      } await devBurgerFetch.post(`/order/${tableOrder.id}`,{
        productId: selectedProduct.id,
        quantity
      }, {headers: { Authorization: token.token}});
      return await getOrder()

    } catch (error) {
      console.log(error);
    }
  }

  const updateTotal = async() => {
    if(order.length){
      const total = order[0].products
        .reduce((acc, p) => acc + (p.price * p.OrderProduct.quantity),0)
      await devBurgerFetch.put(`/table/${tableOrder.tableId}`,{total})
      await getTableOrder(tableOrder.tableId)
    }
  }

  useEffect(() => {
    updateTotal()
    setSelectedProduct({product:""})
    setQuantity('')
  }, [order])

  return (
    <div>
    <form onSubmit={handleClick} className="newOrder">
      <label htmlFor="product-input">
        <input
          type="text"
          name="product"
          placeholder='Click in a product'
          disabled={(selectedProduct.product === "")}
          value={selectedProduct.product}
        />
      </label>
      <label htmlFor="quantity-input">
        <input
          type="number"
          name="quantity"
          placeholder='quantity'
          value={quantity}
          onChange={ ({target}) => setQuantity(target.value) }
        />
      </label>
      <button
        type="submit"
      >
        <RiAddCircleFill />
      </button>
    </form>
  </div>
  )
}

export default NewOrder