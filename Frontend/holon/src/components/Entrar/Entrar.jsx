import React, { useState } from 'react';
import './Entrar.css';
import { Link } from 'react-router-dom';
import '../NavBar/Navbar.css';


export default function Entrar() {
  return (
    <div className="mainDiv">
      <Link 
        to='/' 
        className='back-icon' 
      >
        <i class='fas fa-chevron-left' />
      </Link>
      <h1 className='topText'>Entrar</h1>
      <Link 
        to='/' 
        className='google-icon' 
      >
        <i class='fab fa-google' />
      </Link>
      <Link 
        to='/' 
        className='facebook-icon' 
      >
        <i class='fab fa-facebook' />
      </Link>
      <div className="line" />
      <h1 className='topText2'>Ou entre com e-mail</h1>      
      <div className="line2" />
      <div className="bottomEmail">
        {<a href="/" className="">Digite um email</a>}
      </div>
      <div className="bottomSenha">
        {<a href="/" className="">Digite sua senha</a>}
      </div>
      <h1 className='topText3'>Esqueci Minha Senha</h1>
      <div className="bottomEntrar">
        {<a href="/" className="topText4">Entrar</a>}
      </div>

    </div>
  ) 
}
