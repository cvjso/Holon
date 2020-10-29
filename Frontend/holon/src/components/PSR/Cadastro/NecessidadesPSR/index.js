import React, { Component } from 'react';
import './styles.css';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';
import HeaderCadastro from '../HeaderCadastro';

const cookies = new Cookies();

export class NecessidadesPSR extends Component {

    constructor(props){
        super(props);
        this.state = {
            Descricao:"",
            Saude:"",
            Comida:"",
            Agua:"",
            Higiene:"",
            Roupas:"",
            Outros:"",
            redirectP2:""
        }
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
            redirectP2: "/reporte/P3"
        })

    }

    render(){
        if (this.state.redirectP2){
            return (
                <Redirect
                    to={{
                        pathname:this.state.redirectP2
                    }}
                />
            );
        }
        return(
            <div className="Necessidades-main">
                <HeaderCadastro/>
            
                <text>Nos conte mais sobre ela(s)</text>
                <form onSubmit={this.handleSubmit}>
                    <div className="Container-field">
                        <text>Descrição</text>
                        <input onChange={this.handleChange} className="Custom-input-text" type="text" placeholder="Descreva sua aparência, vestimentas"></input>
                    </div>

                    <div className="Container-header">
                        <text>Do que ela(s) precisa(m)?</text>
                    </div>

                    <div className="Container-field">
                        <text>Saúde</text>
                        <div className="Container-field" onChange={this.handleChange}>
                            <div>
                            <input type="radio" name="Saude" value="Remedios"></input>
                            <label for="Remedios">Remédios</label>
                            </div>
                            <div>
                            <input type="radio" name="Saude" value="AssistenciaMedica"></input>
                            <label for="AssistenciaMedica">Assistência médica</label>
                            </div>
                            <div>
                            <input type="radio" name="Saude" value="AssistenciaVet"></input>
                            <label for="AssistenciaVet">Assistencia Veterinária</label>
                            </div>
                        </div>
                    </div>
                    <div className="Container-field">
                        <text>Comida</text>
                        <input name="Comida" onChange={this.handleChange} placeholder="Especificações/Outros" className="Custom-input-text" type="text"></input>
                    </div>
                    <div className="Container-field">
                        <text>Água</text>
                        <div className="Container-field" onChange={this.handleChange}> 
                            <div>
                            <input type="radio" name="Agua" value="500 mL"></input>
                            <label for="500 mL">500 mL</label>
                            </div>
                            <div>
                            <input type="radio" name="Agua" value="1 L"></input>
                            <label for="1 L">1 L</label>
                            </div>
                            <div>
                            <input type="radio" name="Agua" value="2 L"></input>
                            <label for="2 L">2 L</label>
                            </div>
                            <div>
                            <input type="radio" name="Agua" value="5 L"></input>
                            <label for="5 L">5 L</label>
                            </div>
                        </div>
                    </div>
                    <div className="Container-field">
                        <text>Higiene</text>
                        <div onChange={this.handleChange}>
                            <div>
                                <input value="Sabonete" name="Higiene" type="radio"></input>
                                <label for="Sabonete ">Sabonete</label>
                            </div>
                            <div>
                                <input value="Xampu" name="Higiene" type="radio"></input>
                                <label for="Xampu">Xampu</label>
                            </div>
                            <div>
                                <input value="Escova/Pasta de dente" name="Higiene" type="radio"></input>
                                <label for="Escova/Pasta de dente">Escova/Pasta de dente</label>
                            </div>
                            <div>
                                <input value="Álcool" name="Higiene" type="radio"></input>
                                <label for="Álcool">Álcool</label>
                            </div>
                            <div>
                                <input value="Fralda" name="Higiene" type="radio"></input>
                                <label for="Fralda">Fralda</label>
                            </div>
                            <div>
                                <input value="Absorvente" name="Higiene" type="radio"></input>
                                <label for="Absorvente">Absorvente</label>
                            </div>
                        </div>
                    </div>
                    <div className="Container-field">
                        <text>Roupas</text>
                        <div onChange={this.handleChange}>
                            <div>
                                <input value="Camisa" name="Roupas" type="radio"></input>
                                <label for="Camisa">Camisa(s)</label>
                            </div>
                            <div>
                                <input value="Calças" name="Roupas" type="radio"></input>
                                <label for="Calças">Calças(s)/Bermudas/Short(s)</label>
                            </div>
                            <div>
                                <input value="Calçados" name="Roupas" type="radio"></input>
                                <label for="Calçados">Calçado(s)</label>
                            </div>
                            <div>
                                <input value="RoupaIntima" name="Roupas" type="radio"></input>
                                <label for="RoupaI ntima">Roupa(s) Intima(s)</label>
                            </div>
                        </div>
                    </div> 
                    <div className="Container-field">
                        <text>Outras Doações</text>
                        <input name="Outros" onChange={this.handleChange} placeholder="Especificações/Outros" className="Custom-input-text" type="text"></input>
                    </div>
                    <div className="Container-field Container-header">
                        <input type="submit" value="Proximo"/>
                    </div>
                </form>
            </div>
        )
    }

}
export default NecessidadesPSR