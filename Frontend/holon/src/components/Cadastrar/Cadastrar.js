import React, { Component } from 'react';
import './Cadastrar.css';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';

const cookies = new Cookies();

export class Cadastrar extends Component{
  constructor(props) {
		super(props);

		this.state = {
			nome: '',
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
			operation: 'registrar',
			nome: 'Victor Souza',
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
              <div className="mainDiv">
                <div>
                  <a href='/' className='back-icon'>
                    <i class='fas fa-chevron-left' />
                  </a>
                </div>

                <div className="items">

                  <h1 className='topText'>Comece na corrente do bem</h1>

                  <div className="icones">

                    <a href='/' className="google-icon"><i class='fab fa-google' /></a>
                    <a href='/' className="facebook-icon"><i class='fab fa-facebook' /></a>

                  </div>

                  <div className="line-text">
                    <div className="line"/><h2 className='topText2'>Ou crie uma conta</h2><div className="line" />
                  </div>
                  
                  <form onSubmit={this.handleSubmit} noValidate>
                    <input name="nome" onChange={this.handleChange} type="text" className="bottomNome" placeholder="Nome Completo" required />
                    <input name="login" onChange={this.handleChange} type="email" className="bottomEmail" placeholder="Login" required />
                    <input name="senha" onChange={this.handleChange} type="password" className="bottomSenha" placeholder="Senha" required />
                    
                    <div>
                      <input type="checkbox" name="Termos" value="termos" className="checkbox"></input>
                      <label for="termos">Sim, eu concordo com os Termos e Politica de Privacidade</label>
                    </div>
                    <div>
                      <input type="checkbox" name="Notificações" value="notificacoes" className="checkbox"></input>
                      <label for="notificacoes">Sim, quero receber notificações por e-mail</label>
                    </div>
                    <div>
                      <input type="checkbox" name="Localização" value="localizacao" className="checkbox"></input>
                      <label for="localizacao">Sim, permito o uso da minha localização</label>
                    </div>

                    {!this.state.loading && <input type="submit" value="Começar" className="bottomEntrar" />}

                  </form>

                </div>

              </div>
			)
		} else {
            return (
              <div className="mainDiv">

                <div>
                  <a href='/' className='back-icon'>
                    <i class='fas fa-chevron-left' />
                  </a>
                </div>

              </div>
            )
          }
		}
			
}


export default Cadastrar;