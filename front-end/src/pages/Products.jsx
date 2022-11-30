import React, { useEffect, useContext } from 'react'
import devBurgerContext from '../context/devBurgerContext'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Table from '../components/Table'
import '../styles/home.scss';
import '../styles/form.scss';
import devBurgerFetch from '../axios/config'


function Product() {
  const { getProducts, products, product, setProduct, 
    update, setUpdate, change, setChange, token } = useContext(devBurgerContext)

  useEffect(() => {
    getProducts()
    setUpdate(false)
    setProduct({ product:'', price:'', description:'', image:''});
  }, [change])

  const create = async () => {
    try {
      await devBurgerFetch.post('/product', product,
      {headers: { Authorization: token.token}});
      setChange(!change)

    } catch (error) {
      console.log(error);
    }
  };

  const edit = async () => {
    const { id:_id, ...productWithoutId} = product;
    try {
      await devBurgerFetch.put(`/product/${product.id}`,productWithoutId,
      {headers: { Authorization: token.token}});
      setChange(!change)

    } catch (error) {
      console.log(error);
    }
  };

  if (products.length && token.positionHeld === "Manager"){
    return (
      <div>
          <Header />
        <div className='home'>
          <Nav />
          <div className='products'>
            <form>
              <input 
                type='text' 
                placeholder='Product'
                value={product.product} 
                onChange={ ({target}) => setProduct({...product, product: target.value}) }/>
              <input 
                type='number' 
                placeholder='Price' 
                value={product.price}
                onChange={ ({target}) => setProduct({...product, price: target.value}) }/>
              <input 
                type='text' 
                placeholder='Description' 
                value={product.description}
                onChange={ ({target}) => setProduct({...product, description: target.value}) }/>
              <input 
                type='text' 
                placeholder='Image' 
                value={product.image}
                onChange={ ({target}) => setProduct({...product, image: target.value}) }/>
              {(update)?<button type='button' onClick={edit}>Edit</button>
              :<button type='button' onClick={create}>Create</button>}
            </form>
          <Table title={'Products'} array={products}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Product