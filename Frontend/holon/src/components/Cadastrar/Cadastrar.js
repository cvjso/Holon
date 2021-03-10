import React, { Component } from 'react';
import './Cadastrar.css';
import Cookies from 'universal-cookie';
import { Link, Redirect } from 'react-router-dom';
import Spinner from '../../common/Images/LoadingSpinner.gif';

const axios = require('axios');
const cookies = new Cookies();
class Cadastrar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nome: '',
			login: '',
			password: '',
			registered: false,
			loading: false,
			errorMessage: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	request_back(data) {
		try {
			return axios.post('http://localhost:8000/user', data);
		} catch (error) {
			console.error(error);
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({ errorMessage: '' });
		this.setState({ loading: true });

		const content = {
			operation: 'registrar',
			usuario: {
				Nome: this.state.nome,
				Email: this.state.login,
				Senha: this.state.password
			}
		};

		console.log('chegou aqui');
		this.request_back(content)
			.then((response) => {
				console.log(response);
				this.setState({ loading: false });
				if (response.data === 'Registrado') {
					this.setState({ registered: true });
				} else {
					this.setState({ errorMessage: response.data });
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className="mainDiv">
				<div className="cadastro-header">
					<Link href="/" className="back-icon">
						<i class="fas fa-chevron-left" />
					</Link>
				</div>

				<div className="items">
					<h1 className="topText">Comece na corrente do bem</h1>

					<div className="icones">
						<a href="/" className="google-icon">
							<i class="fab fa-google" />
						</a>
						<a href="/" className="facebook-icon">
							<i class="fab fa-facebook" />
						</a>
					</div>

					<div className="line-text">
						<div className="line" />
						<h2 className="topText2">Ou crie uma conta</h2>
						<div className="line" />
					</div>

					<form onSubmit={this.handleSubmit}>
						<input
							name="nome"
							onChange={this.handleChange}
							type="text"
							className="input-login"
							placeholder="Nome Completo"
							required
						/>
						<input
							name="login"
							onChange={this.handleChange}
							type="email"
							className="input-login"
							placeholder="Email"
							required
						/>
						<input
							name="password"
							onChange={this.handleChange}
							type="password"
							className="input-login"
							placeholder="Senha"
							required
						/>

						<input type="submit" value="Começar" className="bottomEntrar" />
						{this.state.loading && <img src={Spinner} />}
					</form>
					{this.state.registered && (
						<div>
							<h1>{this.state.nome} foi registrado com sucesso!</h1>
						</div>
					)}

					{this.state.errorMessage != '' && (
						<div className="error-message">
							<h1>{this.state.errorMessage}</h1>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Cadastrar;
