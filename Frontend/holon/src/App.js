import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import NavBar from './components/NavBar';
import Comodarassistencia from './components/ComodarAssistencia/Comodarassistencia';
import Faq from './components/FAQ/Faq';
import SobreNos from './components/SobreNos/SobreNos';
import Ajuda from './components/Ajuda/Ajuda';
import Entrar from './components/Entrar/Entrar.js';
import Cadastrar from './components/Cadastrar/Cadastrar';
import ReportePSR from './components/PSR/Cadastro/ReportePSR';
import NecessidadesPSR from './components/PSR/Cadastro/NecessidadesPSR';
import ResumoPSR from './components/PSR/Cadastro/ResumoPSR';
import Mapa from './components/Mapa';
import SuaAtividadeAtendido from './components/SuaAtividade/Atendidos';
import SuaAtividadeReportado from './components/SuaAtividade/Reportados';
import Cookies from 'universal-cookie';
import './App.css';
const cookies = new Cookies();

require('dotenv').config();

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			loggedStatus: 'NOT_LOGGED',
			user: {}
		};
		this.authUser = this.authUser.bind(this);
	}

	authUser(data) {
		this.setState({
			loggedStatus: 'LOGGED',
			user: data
		});
		cookies.set('user_status', 'LOGGED');
		cookies.set('user', data);
	}

	componentDidMount() {
		if (cookies.get('user_status') === 'LOGGED') {
			this.setState({
				loggedStatus: 'LOGGED',
				user: cookies.get('user')
			});
		}
	}

	render() {
		return (
			<div className="Main">
				<Router>
					<NavBar loggedStatus={this.state.loggedStatus} user={this.state.user} />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/como-dar-assistencia" component={Comodarassistencia} />
						<Route path="/faq" component={Faq} />
						<Route path="/sobre-nos" component={SobreNos} />
						<Route path="/ajuda" component={Ajuda} />
						<Route
							path="/entrar"
							render={(props) => (
								<Entrar
									{...props}
									authUser={this.authUser}
									loggedStatus={this.state.loggedStatus}
									user={this.state.user}
								/>
							)}
						/>
						<Route
							path="/cadastrar"
							render={(props) => <Cadastrar {...props} loggedStatus={this.state.loggedStatus} />}
						/>
						<Route path="/reporte/P1" component={ReportePSR} />
						<Route path="/reporte/P2" render={(props) => <NecessidadesPSR {...props} />} />
						<Route path="/reporte/P3" render={(props) => <ResumoPSR {...props} />} />
						<Route path="/reporte" component={ReportePSR} />
						<Route path="/mapa" component={Mapa} />
						<Route path="/suaAtividadeAtendido" component={SuaAtividadeAtendido} />
						<Route path="/suaAtividadeReportado" component={SuaAtividadeReportado} />
					</Switch>
				</Router>
			</div>
		);
	}
}
