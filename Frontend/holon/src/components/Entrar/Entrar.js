import React, { Component } from 'react';
import './reset.css';
import './Entrar.css';
import Cookies from 'universal-cookie';
import axios from 'axios';
import GoogleBtn from '../GoogleBtn/index';
import Spinner from '../../common/Images/LoadingSpinner.gif';
import { Link } from 'react-router-dom';
const cookies = new Cookies();

export class Entrar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			login: '',
			password: '',
			loading: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	request_back(data) {
		try {
			return axios.post('http://localhost:8000/user', data);
		} catch (error) {
			console.error(error);
		}
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		if (this.state.password != '' && this.state.login != '') {
			this.setState({ loading: true });

			const content = {
				operation: 'auth',
				usuario: {
					Email: this.state.login,
					Senha: this.state.password
				}
			};

			this.request_back(content)
				.then((response) => {
					console.log(response);
					if (response.data.status === true) {
						const userData = {
							Nome: response.data.Nome,
							Email: response.data.Email
						};
						this.props.authUser(userData);
						this.props.history.push('/mapa');
					}
					this.setState({ loading: false });
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}

	render() {
		return (
			<div className="mainDiv">
				<div>
					<a href="/" className="back-icon">
						<i class="fas fa-chevron-left" />
					</a>
				</div>

				<div className="items">
					<h1 className="top-text">Entrar</h1>

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
						<h2 className="topText2">Ou entre com e-mail</h2>
						<div className="line" />
					</div>

					<form onSubmit={this.handleSubmit} noValidate>
						<input
							name="login"
							type="login"
							value={this.state.login}
							className="input-login"
							placeholder="Login"
							onChange={this.handleChange}
							required
						/>
						<input
							name="password"
							type="password"
							className="input-login"
							placeholder="Senha"
							onChange={this.handleChange}
							required
						/>
						<Link href="/" className="fogot-password">
							Esqueci minha senha
						</Link>

						<input type="submit" value="Entrar" className="bottomEntrar" />
						{this.state.loading && <img src={Spinner} />}
					</form>
				</div>
			</div>
		);
	}
}
export default Entrar;

//269049783462-cikoeou5mg35qmonpl2a3v7bu5umaef8.apps.googleusercontent.com
