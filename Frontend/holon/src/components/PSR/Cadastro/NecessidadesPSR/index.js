import React, { Component } from 'react';
import './styles.css';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';
import HeaderCadastro from '../HeaderCadastro';
import { Accordion, Icon } from 'semantic-ui-react';

const cookies = new Cookies();

export class NecessidadesPSR extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Descricao: '',
			Saude: '',
			Comida: '',
			Agua: '',
			Higiene: '',
			Roupas: '',
			Outros: '',
			redirectP2: '',
			selectedAccord: -1
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.setAccordion = this.setAccordion.bind(this);
	}

	setAccordion(e, titleProps) {
		const { index } = titleProps;
		var newIndex = index;
		if (index == this.state.selectedAccord) {
			newIndex = -1;
		}
		this.setState({ selectedAccord: newIndex });
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
		console.log(event.target.name);
	}

	handleSubmit(event) {
		event.preventDefault();

		// for (var key in Object.keys(this.state)) {
		// 	cookies.set(key, this.state[key]);
		// }

		this.setState({
			redirectP2: '/reporte/P3'
		});
	}

	render() {
		if (this.state.redirectP2) {
			this.props.location.state.psr['Descricao'] = this.state.Descricao;
			return (
				<Redirect
					to={{
						pathname: this.state.redirectP2,
						state: {
							psr: this.props.location.state.psr,
							necessidades: {
								Saude: this.state.Saude,
								Comida: this.state.Comida,
								Agua: this.state.Agua,
								Higiene: this.state.Higiene,
								Roupas: this.state.Roupas,
								Outros: this.state.Outros
							},
							latlong: this.props.location.state.latlong
						}
					}}
				/>
			);
		}
		return (
			<div className="Necessidades-main">
				<HeaderCadastro />

				<text>Nos conte mais sobre ela(s)</text>
				<form onSubmit={this.handleSubmit} className="Necessidades-form">
					<div className="Container-header">
						<text>Descrição</text>
						<input
							onChange={this.handleChange}
							className="Desc-input"
							type="text"
							placeholder="Descreva sua aparência, vestimentas"
						/>
					</div>

					<div className="Container-header">
						<text>Do que ela(s) precisa(m)?</text>
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
								Saúde
							</text>
						</Accordion.Title>

						<Accordion.Content active={this.state.selectedAccord === 0} className="Accordion-content">
							<div onChange={this.handleChange}>
								<div>
									<input type="radio" name="Saude" value="Remedios" />
									<label for="Remedios">Remédios</label>
								</div>
								<div>
									<input type="radio" name="Saude" value="AssistenciaMedica" />
									<label for="AssistenciaMedica">Assistência médica</label>
								</div>
								<div>
									<input type="radio" name="Saude" value="AssistenciaVet" />
									<label for="AssistenciaVet">Assistencia Veterinária</label>
								</div>
							</div>
						</Accordion.Content>

						<Accordion.Title
							active={this.state.selectedAccord == 1}
							index={1}
							onClick={this.setAccordion}
							className="Accordion-item"
						>
							<text>
								<Icon className="dropdown" />
								Comida
							</text>
						</Accordion.Title>

						<Accordion.Content className="Accordion-content" active={this.state.selectedAccord === 1}>
							<input
								name="Comida"
								onChange={this.handleChange}
								placeholder="Especificações/Outros"
								className="Desc-input"
								type="text"
							/>
						</Accordion.Content>

						<Accordion.Title
							active={this.state.selectedAccord == 2}
							index={2}
							onClick={this.setAccordion}
							className="Accordion-item"
						>
							<text>
								<Icon className="dropdown" />
								Água
							</text>
						</Accordion.Title>

						<Accordion.Content className="Accordion-content" active={this.state.selectedAccord === 2}>
							<div onChange={this.handleChange}>
								<div>
									<input type="radio" name="Agua" value="500 mL" />
									<label for="500 mL">500 mL</label>
								</div>
								<div>
									<input type="radio" name="Agua" value="1 L" />
									<label for="1 L">1 L</label>
								</div>
								<div>
									<input type="radio" name="Agua" value="2 L" />
									<label for="2 L">2 L</label>
								</div>
								<div>
									<input type="radio" name="Agua" value="5 L" />
									<label for="5 L">5 L</label>
								</div>
							</div>
						</Accordion.Content>

						<Accordion.Title
							active={this.state.selectedAccord == 3}
							index={3}
							onClick={this.setAccordion}
							className="Accordion-item"
						>
							<text>
								<Icon className="dropdown" />
								Higiene
							</text>
						</Accordion.Title>

						<Accordion.Content className="Accordion-content" active={this.state.selectedAccord === 3}>
							<div onChange={this.handleChange}>
								<div>
									<input value="Sabonete" name="Higiene" type="radio" />
									<label for="Sabonete ">Sabonete</label>
								</div>
								<div>
									<input value="Xampu" name="Higiene" type="radio" />
									<label for="Xampu">Xampu</label>
								</div>
								<div>
									<input value="Escova/Pasta de dente" name="Higiene" type="radio" />
									<label for="Escova/Pasta de dente">Escova/Pasta de dente</label>
								</div>
								<div>
									<input value="Álcool" name="Higiene" type="radio" />
									<label for="Álcool">Álcool</label>
								</div>
								<div>
									<input value="Fralda" name="Higiene" type="radio" />
									<label for="Fralda">Fralda</label>
								</div>
								<div>
									<input value="Absorvente" name="Higiene" type="radio" />
									<label for="Absorvente">Absorvente</label>
								</div>
							</div>
						</Accordion.Content>

						<Accordion.Title
							active={this.state.selectedAccord == 4}
							index={4}
							onClick={this.setAccordion}
							className="Accordion-item"
						>
							<text>
								<Icon className="dropdown" />
								Roupas
							</text>
						</Accordion.Title>

						<Accordion.Content className="Accordion-content" active={this.state.selectedAccord === 4}>
							<div onChange={this.handleChange}>
								<div>
									<input value="Camisa" name="Roupas" type="radio" />
									<label for="Camisa">Camisa(s)</label>
								</div>
								<div>
									<input value="Calças" name="Roupas" type="radio" />
									<label for="Calças">Calças(s)/Bermudas/Short(s)</label>
								</div>
								<div>
									<input value="Calçados" name="Roupas" type="radio" />
									<label for="Calçados">Calçado(s)</label>
								</div>
								<div>
									<input value="RoupaIntima" name="Roupas" type="radio" />
									<label for="RoupaI ntima">Roupa(s) Intima(s)</label>
								</div>
							</div>
						</Accordion.Content>

						<Accordion.Title
							active={this.state.selectedAccord == 5}
							index={5}
							onClick={this.setAccordion}
							className="Accordion-item"
						>
							<text>
								<Icon className="dropdown" />
								Outras Doações
							</text>
						</Accordion.Title>

						<Accordion.Content className="Accordion-content" active={this.state.selectedAccord === 5}>
							<input
								name="Outros"
								onChange={this.handleChange}
								placeholder="Especificações/Outros"
								className="Desc-input"
								type="text"
							/>
						</Accordion.Content>
					</Accordion>
					<div className="Necessidades-next">
						<input type="submit" value="Proximo" />
					</div>
				</form>
			</div>
		);
	}
}
export default NecessidadesPSR;
