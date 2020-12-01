import React, { Component } from 'react';
import './styles.css';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';
import HeaderCadastro from '../HeaderCadastro';
import { Accordion, Icon } from 'semantic-ui-react';
import axios from 'axios';

const cookies = new Cookies();

export class ResumoPSR extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Saude: '',
			Comida: '',
			Agua: '',
			Higiene: '',
			Roupas: '',
			Outros: '',
			Descricao: '',
			Endereco: '',
			Bairro: '',
			Cidade: '',
			Referencia: '',
			Grau: '',
			redirectP3: '',
			selectedAccord: -1
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.getInputs = this.getInputs.bind(this);
		this.setAccordion = this.setAccordion.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	request_back(data) {
		try {
			return axios.post('http://localhost:8000/psr', data);
		} catch (error) {
			console.error(error);
		}
	}

	handleSubmit(event) {
		event.preventDefault();

		var psrData = this.props.location.state.psr;
		psrData['GrauPrioridade'] = this.state.Grau;

		const requestData = {
			operation: 'criar',
			psr: psrData,
			necessidades: this.props.location.state.necessidades,
			latlong: this.props.location.state.latlong
		};

		this.request_back(requestData)
			.then((response) => {
				console.log(response);
				if (response.data === 'Reporte Cadastrado') {
					this.setState({
						redirectP3: '/'
					});
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	setAccordion(e, titleProps) {
		const { index } = titleProps;
		var newIndex = index;
		if (index == this.state.selectedAccord) {
			newIndex = -1;
		}
		this.setState({ selectedAccord: newIndex });
	}

	getInputs() {
		var PSRContent = this.props.location.state.psr;

		Object.entries(PSRContent).forEach(([ key, value ]) => {
			this.setState({ [key]: value });
			// console.log(key + ' ' + value);
		});

		var PSRNecessidades = this.props.location.state.necessidades;
		Object.entries(PSRNecessidades).forEach(([ key, value ]) => {
			this.setState({ [key]: value });
			// console.log(this.state[key]);
		});
		console.log(PSRNecessidades);
	}

	componentDidMount() {
		this.getInputs();
	}

	render() {
		if (this.state.redirectP3) {
			return (
				<Redirect
					to={{
						pathname: this.state.redirectP3
					}}
				/>
			);
		}
		return (
			<div className="Resumo-main">
				<HeaderCadastro />
				<form onSubmit={this.handleSubmit} className="Resumo-form">
					<div className="Container-header">
						<text>Mais alguma coisa?</text>
					</div>
					<Accordion styled className="Accordion">
						<Accordion.Title
							active={this.state.selectedAccord === 0}
							index={0}
							onClick={this.setAccordion}
							className="Accordion-item"
						>
							<text>
								<Icon className="dropdown" />
								Grau de Prioridade
							</text>
						</Accordion.Title>
						<Accordion.Content active={this.state.selectedAccord == 0} className="Accordion-content">
							<div onChange={this.handleChange}>
								<div>
									<input type="radio" name="Grau" value="Baixo" />
									<label for="Remedios">Baixo</label>
								</div>
								<div>
									<input type="radio" name="Grau" value="Medio" />
									<label for="Remedios">Médio</label>
								</div>
								<div>
									<input type="radio" name="Grau" value="Alto" />
									<label for="Remedios">Alto</label>
								</div>
							</div>
						</Accordion.Content>
					</Accordion>
					<div className="Container-header">
						<text>Comentários</text>
						<input className="Custom-input-text" name="" type="text" placeholder="Digite seu comentario" />
					</div>
					<div className="Resume-bottom">
						<h3>Resumo</h3>
						<div>
							<h4>Localização Aproximada</h4>
							{this.state.Bairro}
						</div>
						<div>
							<h4>Como identificar?</h4>
							{this.state.Referencia}
						</div>
						<div className="Resume-top-vertical-align">
							<h4>O que precisa?</h4>
							<div>{this.state.Saude}</div>
							<div>{this.state.Comida}</div>
							<div>{this.state.Agua}</div>
							<div>{this.state.Higiene}</div>
							<div>{this.state.Roupas}</div>
							<div>{this.state.Outros}</div>
						</div>
						<div>
							<h4>Grau de prioridade</h4>
							{this.state.Grau}
						</div>
					</div>
					<div className="Finalizar-chamado">
						<input type="submit" value="Finalizar Chamado" />
					</div>
				</form>
			</div>
		);
	}
}
export default ResumoPSR;
