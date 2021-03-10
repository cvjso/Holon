import React, { useState } from 'react';
import { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export class Ajudar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Necessidades: ''
		};
		this.finishHelp = this.finishHelp.bind(this);
	}

	componentDidMount() {
		console.log(this.props.location.psrNecessidades);
		this.setState({ Necessidades: this.props.location.psrNecessidades });
	}

	finishHelp() {
		this.props.history.push({
			pathname: '/',
			ajudado: true
		});
	}

	render() {
		return (
			<div className="Main-help">
				<div className="Titulo">O que você doou?</div>

				<div className="DivInformacoes">
					{this.state.Necessidades.Roupas && (
						<div>
							<div className="precisaCamisa" id="itemAttributes">
								<h3 className="roupaTitle" id="precisaAttributes">
									Roupa
								</h3>
							</div>
							<div className="roupaItem">Camisa(s)</div>
							<div className="roupaItem">Calça(s)/Bermudas/Short(s)</div>
							<div className="roupaItem">Calçados</div>
							<input className="inputsDoacao" placeholder="Escreva aqui" />
						</div>
					)}

					{this.state.Necessidades.Comida && (
						<div>
							<div className="precisaComida" id="itemAttributes">
								<h3 className="roupaTitle" id="precisaAttributes">
									Comida
								</h3>
							</div>
							<input className="inputsDoacao" placeholder="Escreva aqui" />
						</div>
					)}

					{this.state.Necessidades.Agua && (
						<div>
							<div className="precisaAgua" id="itemAttributes">
								<h3 className="roupaTitle" id="precisaAttributes">
									Água
								</h3>
							</div>
							<div className="roupaItem">500 mL</div>
							<div className="roupaItem">1 L</div>
							<div className="roupaItem">2 L</div>
							<div className="roupaItem">5 L</div>
							<input className="inputsDoacao" placeholder="Escreva aqui" />
						</div>
					)}

					{this.state.Necessidades.Higiene && (
						<div>
							<div className="precisaAgua" id="itemAttributes">
								<h3 className="roupaTitle" id="precisaAttributes">
									Higiene
								</h3>
							</div>
							<div className="roupaItem">Sabonete</div>
							<div className="roupaItem">Xampu</div>
							<div className="roupaItem">Escova/Pasta de dente</div>
							<div className="roupaItem">Álcool</div>
							<div className="roupaItem">Fralda</div>
							<div className="roupaItem">Absorvente</div>
							<input className="inputsDoacao" placeholder="Escreva aqui" />
						</div>
					)}

					{this.state.Necessidades.Saude && (
						<div>
							<div className="precisaCamisa" id="itemAttributes">
								<h3 className="roupaTitle" id="precisaAttributes">
									Saude
								</h3>
							</div>
							<div className="roupaItem">Remédios</div>
							<div className="roupaItem">Assistência médica</div>
							<div className="roupaItem">Assistencia Veterinária</div>
							<input className="inputsDoacao" placeholder="Escreva aqui" />
						</div>
					)}

					<div>
						<div className="precisaOutras" id="itemAttributes">
							<h3 className="roupaTitle" id="precisaAttributes">
								Outras Doações
							</h3>
						</div>
						<input className="inputsDoacao" placeholder="Escreva aqui" />
					</div>
				</div>

				<div>
					<button className="btCancelar" onClick={this.finishHelp}>
						AJUDA CONCLUÍDA
					</button>
				</div>
			</div>
		);
	}
}

export default Ajudar;
