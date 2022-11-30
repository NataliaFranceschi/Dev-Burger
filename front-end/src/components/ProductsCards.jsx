import React, { useEffect, useContext } from 'react'
import '../styles/productsCards.scss';
import devBurgerContext from '../context/devBurgerContext'
import card from '../card.png'
function Products() {
  const { setSelectedProduct, getProducts, products } = useContext(devBurgerContext)

  useEffect(() => {
    getProducts()
  }, [])

  const handleClick = (product) => {
    setSelectedProduct(product)
  }

  return (
    <div className='productsCards'>
      {products.map((product, index) => {
        return (
          <button 
            type='button' 
            className='product' 
            key={index}
            onClick={() => handleClick(product)}>
              {(product.image !== null)
                ?<img src={ product.image } alt='product'/>
                :<img src={ card } alt='product'/>}
              <p className='price'>{`$ ${product.price}`}</p>
              <p className='name'>{product.product}</p>
              <p>{product.description}</p>
          </button>
        )
      })}
    </div>
  )
}

export default Products