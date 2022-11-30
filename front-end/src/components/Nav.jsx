import React from 'react'
import '../styles/nav.scss';
import { useHistory } from 'react-router-dom';

function Nav() {
  const nav = ['(+) Product','(+) Employee','Revenue' ] 
  const pages = ['/product', '/employee', '/revenue'] 
  const history = useHistory();
  
  return (
    <div className='nav'>
        {nav.map((e, index) => 
          <button 
          key={index} 
          type='button'
          onClick={() => history.push(pages[index])}>
            {e}
          </button> )}
    </div>
  )
}

export default Nav