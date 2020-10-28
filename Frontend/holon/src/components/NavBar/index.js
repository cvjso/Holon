import React, { useState } from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export class Navbar extends Component {

  // [click, setClick] = useState(false);

  handleClick = () => this.setState({click: !this.state.click});
  closeMobileMenu = () => this.setState({setClick: false});

  constructor(props){
    super(props)
    this.state ={
      click: false,
      setClick: false
    }
  }

  render() {
    return (
      <nav className='navbar'>

        <Link to='/' onClick={() => this.closeMobileMenu()}>
          {/* <img src={require('./imagens/logoSamaritanos.png')}></img> */}
          <i class='fab fa-angellist' />
        </Link>

        <div className='menu-icon' onClick={() => this.handleClick()}>
          <i className={this.click ? 'fas fa-bars' : 'fas fa-bars'} />
        </div>

        <ul className={this.click ? 'nav-menu active' : 'nav-menu'}>
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
              onClick={() => this.closeMobileMenu()}
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
              onClick={() => this.closeMobileMenu()}
            >
              Como dar Assistência
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/faq'
              className='nav-links'
              onClick={() => this.closeMobileMenu()}
            >
              FAQ
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/sobre-nos'
              className='nav-links'
              onClick={() => this.closeMobileMenu()}
            >
              Sobre Nós
            </Link>
          </li>
          <li className="nav-line" />
          <li className='nav-item'>
            <Link
              to='/ajuda'
              className='nav-links'
              onClick={() => this.closeMobileMenu()}
            >
              Ajuda
            </Link>
          </li>
        </ul>
        <Link
          to='/entrar'
          className='navbar-entrar'
          onClick={() => this.closeMobileMenu()}
        >
          Entrar
        </Link>
        <Link
          to='/cadastrar'
          className='navbar-entrar-cadastrar'
          onClick={() => this.closeMobileMenu()}
        >
          Cadastrar
        </Link>
      </nav>
    )
  }
}
export default Navbar