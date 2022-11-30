import React, { useEffect, useContext } from 'react'
import devBurgerContext from '../context/devBurgerContext'
import '../styles/tablesOrder.scss';
import '../styles/table.scss';

function TableOrder() {
  const { order, getOrder } = useContext(devBurgerContext)
  
  useEffect(() => {
    getOrder()
  }, [])

  if (order.length){
    return (
      <div className='tableOrder'>
        <table>
          <caption>Order</caption>
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>      
            {order[0].products.map((product, index) => (
              <tr key={index}>
                <td>{product.OrderProduct.quantity}</td>
                <td>{product.product}</td>
                <td>${product.price}</td>
              </tr>
            ))
            }
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>Total</td>
              <td>{`$${order[0].products.reduce((acc, p) => acc + (p.price * p.OrderProduct.quantity),0)}`}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }
}

export default TableOrder