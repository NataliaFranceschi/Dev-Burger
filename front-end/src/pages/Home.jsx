import React, { useContext } from 'react'
import Tables from '../components/Tables'
import Nav from '../components/Nav'
import Header from '../components/Header'
import '../styles/home.scss';
import devBurgerContext from '../context/devBurgerContext'

function Home() {
  const { token } = useContext(devBurgerContext) 

  return (
    <div>
      <Header />
      <div className='home'>
        {(token.positionHeld === "Manager")&&<Nav />}
        <Tables />
      </div>
    </div>
  )
}

export default Home