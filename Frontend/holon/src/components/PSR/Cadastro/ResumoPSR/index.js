import React, { Component } from 'react';
import './styles.css';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';
import HeaderCadastro from '../HeaderCadastro';

const cookies = new Cookies();

export class ResumoPSR extends Component {
    constructor(props){
        super(props);
        this.state = {
            Saude:"",
            Comida:"",
            Agua:"",
            Higiene:"",
            Roupas:"",
            Outros:"",
            Descricao:"",
            Endereco : "",
            Bairro: "",
            Cidade : "",
            Referencia: "",
            Grau: "",
            redirectP3:"",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getInputs = this.getInputs.bind(this);
    }

    handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
    }
    
    handleSubmit(event){
        event.preventDefault();

        cookies.set("finished",true)

        this.setState({
            redirectP3: "/"
        })

    }

    getInputs(){
        for (var key in cookies.getAll()){
            this.setState({[key]: cookies.get(key)});
        }

    }

    componentDidMount(){
        this.getInputs()
    }

    render(){
        if(this.state.redirectP3){
            return(
                <Redirect
                    to={{
                        pathname:this.state.redirectP3
                    }}
                />
            )
        }
        return(
            <div className="Resumo-main">
                <HeaderCadastro/>
                <form onSubmit={this.handleSubmit}>
                <div className="Resumo-content">
                    <div className="Resume-top">
                        <h4>Mais alguma coisa?</h4>
                        <div className="Resume-top-vertical-align">
                            <text>Grau de prioridade</text>
                            <div onChange={this.handleChange}>
                                <div>
                                <input type="radio" name="Grau" value="Baixo"></input>
                                <label for="Remedios">Baixo</label>
                                </div>
                                <div>
                                <input type="radio" name="Grau" value="Medio"></input>
                                <label for="Remedios">Médio</label>
                                </div>
                                <div>
                                <input type="radio" name="Grau" value="Alto"></input>
                                <label for="Remedios">Alto</label>
                                </div>
                            </div>
                        </div>
                        <div className="Resume-top-vertical-align">
                            <text>Comentários</text>
                            <input className="Custom-input-text" name="" type="text"></input>
                        </div>
                    </div>
                    <div className="Resume-bottom">
                        <h3>Resumo</h3>
                        <div>
                            <h4>Localização Aproximada</h4>
                            {this.state.Endereco}
                        </div>
                        <div>
                            <h4>Como identificar?</h4>
                            {this.state.Referencia}
                        </div>
                        <div className="Resume-top-vertical-align">
                            <h4>O que precisa?</h4>
                            <div>
                                {this.state.Saude}
                            </div>
                            <div>
                                {this.state.Comida}
                            </div>
                            <div>
                                {this.state.Agua}
                            </div>
                            <div>
                                {this.state.Higiene}
                            </div>
                            <div>
                                {this.state.Roupas}
                            </div>
                            <div>
                                {this.state.Outros}
                            </div>
                        </div>
                        <div>
                            <h4>Grau de prioridade</h4>
                            {this.state.Grau}
                        </div>
                    </div>
                    <div className="Container-field Container-header">
                        <input type="submit" value="Finalizar Chamado"/>
                    </div>
                </div>
                </form>
            </div>
        )
    }

}
export default ResumoPSR