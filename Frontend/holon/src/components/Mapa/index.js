import React, { Component } from 'react';
import mapStyles from './mapsStyles';
import { GoogleMap, LoadScript, useLoadScript, Marker, InfoWindow, Autocomplete } from '@react-google-maps/api';
import { Button, Checkbox, Grid, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';

import './styles.css';

require('dotenv').config();

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
			libraries: [ 'places' ]
		};
		this.myMap = React.createRef();
		this.onMapLoad = this.onMapLoad.bind(this);
		this.appendMarkers = this.appendMarkers.bind(this);
		this.setModal = this.setModal.bind(this);
		this.handleSidebarHide = this.handleSidebarHide.bind(this);

		this.autocomplete = null;
		this.onLoad = this.onLoad.bind(this);
		this.onPlaceChanged = this.onPlaceChanged.bind(this);
	}

	onMapLoad(map) {
		this.myMap = map;
	}

	onLoad(autocomplete) {
		this.autocomplete = autocomplete;
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

	setModal() {
		if (this.state.modal) {
			this.setState({ modal: false });
		} else {
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
						>
							<div>
								<button onClick={this.handleSidebarHide}>X</button>
								<h2>Detalhes do Chamado</h2>
								<div>
									<div>
										<h3>Início do chamado</h3>
										<text>01/10/2020, 09:20</text>
									</div>
									<div>
										<h3>Localização Aproximada</h3>
										<text>Rua Maria João, 274 Bairro do Recife </text>
									</div>
									<div>
										<h3>Como identificar?</h3>
										<text>Homem alto, por volta dos 50 anos, camisa vermelha</text>
									</div>
									<div>
										<h3>O que precisa?</h3>
									</div>
									<div>
										<h3>Grau de prioridade</h3>
									</div>
									<button>Quero Ajudar</button>
								</div>
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
								googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
							>
								<GoogleMap
									mapContainerStyle={{ width: '100vw', height: '100vh' }}
									zoom={this.state.zoom}
									center={this.state.center}
									options={this.state.options}
									onClick={this.appendMarkers}
									onLoad={this.onMapLoad}
								>
									<Autocomplete onLoad={this.onLoad} onPlaceChanged={this.onPlaceChanged}>
										<input type="text" placeholder="Enter location" className="Search" />
									</Autocomplete>
									{this.state.markers.map((marker) => (
										<Marker
											key={marker.time.toISOString()}
											position={{ lat: marker.lat, lng: marker.lng }}
											onClick={this.setModal}
											icon={{
												url: '/PSR_Icon.svg',
												scaledSize: new window.google.maps.Size(30, 30)
											}}
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
