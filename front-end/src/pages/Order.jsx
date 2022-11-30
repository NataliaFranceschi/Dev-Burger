import React from 'react'
import ProductsCards from '../components/ProductsCards'
import TableOrder from '../components/TableOrder'
import NewOrder from '../components/NewOrder'
import Payment from '../components/Payment'
import Header from '../components/Header'
import '../styles/order.scss';

function Order() {
  return (
    <div>
      <Header />
      <div className='order'>
        <div className='orderInformation'>
          <NewOrder />
          <TableOrder />
          <Payment />
        </div>
        <ProductsCards />
      </div>
    </div>
  )
}

export default Order