import React, { Component } from 'react';
import './reset.css'
import './Entrar.css';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

export class Entrar extends Component {
  constructor(props) {
		super(props);

		this.state = {
			login: '',
			password: '',
			logged: false,
			auth: '',
			loading: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	handleSubmit(event) {
		event.preventDefault();
		this.setState({ loading: true });

		const data = {
			operation: 'auth',
			email: 'admin',
			senha: '123'
		};

		const axios = require('axios');

		const request_back = () => {
			try {
				//return axios.post('http://ec2-100-26-213-121.compute-1.amazonaws.com:8080/PCM/user', data);
			} catch (error) {
				console.error(error);
			}
		};

		request_back()
			.then((response) => {
				this.setState({ loading: false });
				if (response.data.users != []) {
					console.log(this.props);
					this.props.location.state.auth.authenticated = true;
					cookies.set('auth', true, { path: '/' });
					cookies.set('login', this.state.login, { path: '/' });
					this.setState({ logged: true });
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}
  render() 
          {
          if (this.props.location.state.auth.authenticated === false) {
            return (
              <section className="mainDiv">
                <div>
                  <a href='/' className='back-icon'>
                    <i class='fas fa-chevron-left' />
                  </a>
                </div>

                <div className="items">

                  <h1 className='topText'>Entrar</h1>

                  <div className="icones">

                    <a href='/' className="google-icon"><i class='fab fa-google' /></a>
                    <a href='/' className="facebook-icon"><i class='fab fa-facebook' /></a>

                  </div>

                  <div className="line-text">
                    <div className="line"/><h2 className='topText2'>Ou entre com e-mail</h2><div className="line" />
                  </div>
                  
                  <form onSubmit={this.handleSubmit} noValidate>
                    <input name='login'  type="login" value={this.state.login} className="bottomEmail" placeholder="Login" onChange={this.handleChange} required />
                    <input name='password' type="password" className="bottomSenha" placeholder="Senha" onChange={this.handleChange} required />
                    <a href="/" className="topText3">Esqueci minha senha</a>

                    {!this.state.loading && <input type="submit" value="Entrar" className="bottomEntrar" />}
                  </form>

                </div>

              </section>
            )
          } else {
            return (
              <section className="mainDiv">

                <div>
                  <a href='/' className='back-icon'>
                    <i class='fas fa-chevron-left' />
                  </a>
                </div>

              </section>
            )
          }
        }
}
export default Entrar;
