import React, { Component } from 'react';
import './styles.css';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';
import { LoadScript, useLoadScript, Marker, InfoWindow, Autocomplete } from '@react-google-maps/api';

import HeaderCadastro from '../HeaderCadastro';

const cookies = new Cookies();

export class ReportePSR extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: null,
			Endereco: [ 0, 0 ],
			Bairro: '',
			Cidade: '',
			Referencia: '',
			libraries: [ 'places' ]
		};
		this.ShouldRedirect = false;
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);

		this.autocomplete = null;
		this.onLoad = this.onLoad.bind(this);
		this.onPlaceChanged = this.onPlaceChanged.bind(this);
	}

	onLoad(autocomplete) {
		this.autocomplete = autocomplete;
	}

	onPlaceChanged() {
		if (this.autocomplete !== null) {
			console.log(this.autocomplete.getPlace());
			var bairroFiltered = this.autocomplete.getPlace().address_components[0].long_name;
			var cidadeFiltered = this.autocomplete.getPlace().address_components[1].long_name;
			this.setState({
				Bairro: bairroFiltered
			});
			this.setState({
				Cidade: cidadeFiltered
			});
			console.log(this.state.Bairro);
			console.log(this.state.Cidade);
			var latPlace = this.autocomplete.getPlace().geometry.location.lat();
			var lngPlace = this.autocomplete.getPlace().geometry.location.lng();
			console.log(latPlace);
			console.log(lngPlace);
			this.setState({
				Endereco: [ latPlace, lngPlace ]
			});
			console.log(this.state.Endereco);
		} else {
			console.log('Autocomplete is not loaded yet!');
		}
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		for (var key in this.state) {
			cookies.set(key, this.state[key]);
		}

		cookies.remove('libraries');

		this.setState({
			redirect: '/reporte/P2'
		});
	}

	render() {
		console.log(this.state.redirect);

		if (this.state.redirect) {
			return (
				<Redirect
					to={{
						pathname: this.state.redirect
					}}
				/>
			);
		}

		return (
			<div className="PSR-Main">
				<HeaderCadastro />

				<div className="PSR-Content">
					<LoadScript
						libraries={this.state.libraries}
						googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
					>
						<div className="PSR-Header">
							<text>Onde você encontrou a(s) pessoa(s)?</text>
						</div>
						<form onSubmit={this.handleSubmit} className="report-form">
							<div>
								<text>Endereço</text>
								<Autocomplete
									className="addres-input"
									onLoad={this.onLoad}
									onPlaceChanged={this.onPlaceChanged}
								>
									<input placeholder="Digite o endereço" className="Report-input" type="text" />
								</Autocomplete>
							</div>

							<div>
								<text>Bairro</text>
								<input
									className="Report-input"
									name="Bairro"
									onChange={this.handleChange}
									type="text"
									value={this.state.Bairro}
									placeholder="Digite seu bairro"
								/>
							</div>

							<div>
								<text>Cidade</text>
								<input
									className="Report-input"
									name="Cidade"
									onChange={this.handleChange}
									type="text"
									value={this.state.Cidade}
									placeholder="Digite sua cidade"
								/>
							</div>

							<div>
								<text>Referência</text>
								<input
									className="Report-input"
									name="Referencia"
									onChange={this.handleChange}
									type="text"
									placeholder="Digite um ponto de referencia"
								/>
							</div>

							<div>
								<input type="submit" value="Proximo" />
							</div>
						</form>
					</LoadScript>
				</div>
			</div>
		);
	}
}
export default ReportePSR;
