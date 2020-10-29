import React, { Component } from 'react';
import './styles.css';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';

import HeaderCadastro from '../HeaderCadastro';

const cookies = new Cookies();

export class ReportePSR extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect:null,
            Endereco : "",
            Bairro: "",
            Cidade: "",
            Referencia: ""
        };
        this.ShouldRedirect = false
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

    handleSubmit(event){
        event.preventDefault();

        for (var key in this.state){
            cookies.set(key, this.state[key]);
        }

        this.setState({
            redirect: "/reporte/P2"
        })

        // const ArrayValues = Object.values(this.state);
        // Object.keys(this.state).forEach(function(key){
        //     cookies.set(key, ArrayValues);
        // })
    }

    render(){
        console.log(this.state.redirect);

        if (this.state.redirect){
            return (
                <Redirect
                    to={{
                        pathname:this.state.redirect
                    }}
                />
            );
        }
        
        return(
            <div className="PSR-Main">
            
            <HeaderCadastro/>
            
            <div className="PSR-Content">
                <div className="PSR-Header">
                    <text >Onde você encontrou a(s) pessoa(s)?</text>
                </div>
                <form onSubmit={this.handleSubmit}>

                <div>
                    <text>Endereço</text>
                    <input name="Endereco" onChange={this.handleChange} type="text"/>
                </div>

                <div>
                    <text>Bairro</text>
                    <input name="Bairro" onChange={this.handleChange} type="text"/>
                </div>

                <div>
                    <text>Cidade</text>
                    <input name="Cidade" onChange={this.handleChange} type="text"/>
                </div>

                <div>
                    <text>Referência</text>
                    <input name="Referencia" onChange={this.handleChange} type="text"/>
                </div>

                <div>
                    <input type="submit" value="Proximo"/>
                </div>
                </form>
            </div>
        </div>
        )
    }
}
export default ReportePSR