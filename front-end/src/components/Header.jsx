import React from 'react'
import '../styles/header.scss';
import Logo from '../Logo.png'
import { useHistory } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { RiLoginBoxFill } from "react-icons/ri";

function Header() {
  const history = useHistory();

  return (
    <div className='header'>
      <img src={Logo} alt='logo'/>
      <div className='icon'>
        <button  type='button' onClick={() => history.push('/home')} >
          <AiFillHome />
        </button>
        <button  type='button' onClick={() => history.push('/')} >
          <RiLoginBoxFill />
        </button>
      </div>  
    </div>
  )
}

export default Header