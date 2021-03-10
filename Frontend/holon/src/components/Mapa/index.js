import React, { Component } from 'react';
import mapStyles from './mapsStyles';
import { GoogleMap, LoadScript, useLoadScript, Marker, InfoWindow, Autocomplete } from '@react-google-maps/api';
import { Button, Checkbox, Grid, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import * as JSONFile from '../../common/system.json';
import './styles.css';
import PSR_Icon from './images/PSR_Icon.png';

require('dotenv').config();
const axios = require('axios');

export class Mapa extends Component {
	constructor(props) {
		super(props);
		this.state = {
			center: {
				lat: -8.05519,
				lng: -34.871181
			},
			zoom: 10,
			options: {
				styles: mapStyles,
				disableDefaultUI: true
			},
			markers: [],
			modal: false,
			libraries: [ 'places' ],
			psrInfo: {
				psr: {
					Endereco: '',
					Referencia: '',
					Descricao: '',
					GrauPrioridade: ''
				},
				necessidades: ''
			}
		};
		this.myMap = React.createRef();
		this.onMapLoad = this.onMapLoad.bind(this);
		this.appendMarkers = this.appendMarkers.bind(this);
		this.setModal = this.setModal.bind(this);
		this.handleSidebarHide = this.handleSidebarHide.bind(this);

		this.autocomplete = null;
		this.onLoad = this.onLoad.bind(this);
		this.onPlaceChanged = this.onPlaceChanged.bind(this);
		this.RedirectToHelp = this.RedirectToHelp.bind(this);
	}

	onMapLoad(map) {
		this.myMap = map;
	}

	onLoad(autocomplete) {
		this.autocomplete = autocomplete;
	}

	request_back(data) {
		try {
			return axios.post('http://localhost:8000/psr', data);
		} catch (error) {
			console.error(error);
		}
	}

	RedirectToHelp() {
		this.props.history.push({
			pathname: '/ajudar',
			psrNecessidades: this.state.psrInfo.necessidades
		});
	}

	componentDidMount() {
		const data = {
			operation: 'mapa',
			psr: {}
		};
		this.request_back(data)
			.then((response) => {
				var prevValue = 0;
				var newMarkers = [];
				response.data.forEach((value) => {
					if (value.id != prevValue) {
						value.lat = parseFloat(value.lat);
						value.lng = parseFloat(value.lng);
						newMarkers.push(value);
					}
					prevValue = value.id;
				});
				this.setState({
					markers: newMarkers
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	onPlaceChanged() {
		if (this.autocomplete !== null) {
			console.log(this.autocomplete.getPlace());
			var latPlace = this.autocomplete.getPlace().geometry.location.lat();
			var lngPlace = this.autocomplete.getPlace().geometry.location.lng();
			console.log(latPlace);
			console.log(lngPlace);
			var newPlace = {
				lat: latPlace,
				lng: lngPlace
			};
			this.setState({ center: newPlace });
			this.setState({ zoom: 15 });
		} else {
			console.log('Autocomplete is not loaded yet!');
		}
	}

	appendMarkers(event) {
		var newMarkers = this.state.markers;
		newMarkers.push({
			lat: event.latLng.lat(),
			lng: event.latLng.lng(),
			time: new Date()
		});
		this.setState({ markers: newMarkers });
		console.log(this.state.markers);
	}

	setModal(event) {
		if (this.state.modal) {
			this.setState({ modal: false });
		} else {
			console.log(event.latLng.lat());
			console.log(event.latLng.lng());
			const data = {
				Latlng: {
					latitude: event.latLng.lat(),
					longitude: event.latLng.lng()
				},
				operation: 'procurar'
			};
			this.request_back(data)
				.then((response) => {
					response.data.necessidades.id = '';
					response.data.necessidades.Psr = '';
					this.setState({
						psrInfo: response.data
					});
					console.log(this.state.psrInfo);
				})
				.catch((error) => {
					console.log(error);
				});
			this.setState({ modal: true });
		}
	}

	handleSidebarHide() {
		if (this.state.modal) {
			this.setState({ modal: false });
		}
	}

	render() {
		return (
			<div className="Map-container">
				{/* Modal */}
				<Sidebar.Pushable as={Segment} style={{ overflow: 'hidden' }}>
					{this.state.modal ? (
						<Sidebar
							as={Menu}
							animation={'overlay'}
							direction={'bottom'}
							visible={true}
							// onHide={this.handleSidebarHide}
							id="modal-content"
						>
							<div className="modal-chamado-container">
								<button className="modal-fechar" onClick={this.handleSidebarHide}>
									X
								</button>
								<h1>Detalhes do Chamado</h1>
								<div className="modal-chamado-infos">
									<div>
										<h3>Início do chamado</h3>
										<text>01/10/2020, 09:20</text>
									</div>
									<div>
										<h3>Localização Aproximada</h3>
										<text>{this.state.psrInfo.psr.Endereco} </text>
									</div>
									<div>
										<h3>Como identificar?</h3>
										<text>
											{this.state.psrInfo.psr.Referencia} - {this.state.psrInfo.psr.Descricao}{' '}
										</text>
									</div>
									<div className="modal-chamado-nececidades">
										<h3>O que precisa?</h3>
										{Object.keys(this.state.psrInfo.necessidades).map((necessidade) => (
											<text>{this.state.psrInfo.necessidades[necessidade]}</text>
										))}
										{/* <text>{this.state.psrInfo.necessidades}</text> */}
									</div>
									<div>
										<h3>Grau de prioridade</h3>
										<text>{this.state.psrInfo.psr.GrauPrioridade}</text>
									</div>
								</div>
								<button className="modal-ajuda-button" onClick={this.RedirectToHelp}>
									Quero Ajudar
								</button>
							</div>
						</Sidebar>
					) : (
						<div />
					)}

					{/* Mapa */}
					<Sidebar.Pusher dimmed={true && this.state.modal}>
						<div>
							<LoadScript
								libraries={this.state.libraries}
								googleMapsApiKey={JSONFile.REACT_APP_GOOGLE_MAPS_API_KEY}
							>
								<GoogleMap
									mapContainerStyle={{ width: '100vw', height: '100vh' }}
									zoom={this.state.zoom}
									center={this.state.center}
									options={this.state.options}
									// onClick={this.appendMarkers}
									onLoad={this.onMapLoad}
								>
									<Autocomplete onLoad={this.onLoad} onPlaceChanged={this.onPlaceChanged}>
										<input type="text" placeholder="Enter location" className="Search" />
									</Autocomplete>
									{this.state.markers.map((marker) => (
										<Marker
											key={marker.id}
											position={{ lat: marker.lat, lng: marker.lng }}
											onClick={this.setModal}
											// icon={{
											// 	url: '/PSR_Icon.svg',
											// 	scaledSize: new window.google.maps.Size(30, 30)
											// }}
											icon={{ url: PSR_Icon, scaledSize: new window.google.maps.Size(22, 30) }}
										/>
									))}
								</GoogleMap>
							</LoadScript>
						</div>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</div>
		);
	}
}

export default Mapa;
