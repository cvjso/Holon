import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>

        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <i class='fab fa-angellist' />
        </Link>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-bars' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link 
              to='/' 
              className='nav-links-logo' 
            >
             <i class='fab fa-angellist' />
            </Link>
            <Link 
              to='/' 
              className='nav-links-logo2' 
              onClick={closeMobileMenu}
            >
             <i class='fas fa-times' />
            </Link>
          </li>
          <li
            className='nav-item'
          >
            <Link
              to='/como-dar-assistencia'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Como dar Assistência
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/faq'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              FAQ
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/sobre-nos'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Sobre Nós
            </Link>
          </li>
          <li className="nav-line" />
          <li className='nav-item'>
            <Link
              to='/ajuda'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Ajuda
            </Link>
          </li>
        </ul>
        <Link
          to='/entrar'
          className='navbar-entrar'
          onClick={closeMobileMenu}
        >
          Entrar
        </Link>
        <Link
          to='/cadastrar'
          className='navbar-entrar-cadastrar'
          onClick={closeMobileMenu}
        >
          Cadastrar
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
