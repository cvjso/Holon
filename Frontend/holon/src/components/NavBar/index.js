import React, { useState } from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

export class NavBar extends Component {
	// [click, setClick] = useState(false);

	constructor(props) {
		super(props);
		this.state = {
			click: false,
			setClick: false
		};
	}

	render() {
		return (
			<div className="custom-theme">
				<Navbar collapseOnSelect>
					<Navbar.Brand>
						<Link to="/">Holon</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<div className="Nav-items">
							<div>
								<Link to="/entrar">Entrar</Link>
							</div>
							<Link to="/cadastrar">Cadastrar</Link>
						</div>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}
export default NavBar;
