import React, { useState } from 'react';
import { Component } from 'react';
import './reportados.css';
import { Link, Router } from 'react-router-dom';


class ListaReportados extends Component {
    constructor(props) {
        super(props);
        this.state = {reportados: this.props.reportados}
    }

        render() {
            return(
                <div>
                    {
                        this.state.reportados.map(r => {
                            return (
                                <div className='BoxAtividades'>
                                    <div className="divSuperiorBoxAtividades" id="lbSuperioresBoxAtividades">
                                    <h1 className="lbRuaBoxAtividades">{r.rua},</h1>
                                        <h1 className="statusBoxAtividades">{r.status}</h1>
                                    </div>
                                    <h1 className="lbRuaBoxAtividades" id="lbSuperioresBoxAtividades">{r.bairro}</h1>
                                    <h5 id="lbInferioresBoxAtividades">Realizado em {r.data},</h5>
                                    <div className="divInferiorBoxAtividades" id="lbInferioresBoxAtividades">
                                        <h1>{r.hora}</h1>
                                        <button className="statusBoxAtividades" id="botaoDetalhesBoxAtividades">Detalhes</button>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            );
        }
}

export class SuaAtividadeRepordados extends Component {
  render() {
    return (
        <div>
            
            <div className="ParteSuperior">
                <Link 
                    to='/' 
                    className='back-icon' 
                >
                    <i class='fas fa-chevron-left' />
                </Link>
                <h1 className="textoTitulo">Sua Atividade</h1>
            </div>

            <div className="DivInicioConclusao">
                <div className="MenuAtendidos">
                    <Link
                    to='/suaAtividadeAtendido'
                    >
                        <div id="lbAttributes">Atendidos</div>                    
                    </Link>
                </div>
                <div className="MenuReportados">
                    <div id="lbAttributes">Reportados</div>
                </div>
            </div>

            <div className="DivParteInferior">
                <ListaReportados reportados = {[
                    {rua: "Rua Padre Euclides Jardim", bairro: "Afogados", data: "20/09/2020", hora: "09:20", status: "Concluido"},
                    {rua: "Rua Verdes Mares", bairro: "Boa Viagem", data: "25/11/2020", hora: "22:30", status: "Em andamento"},
                    {rua: "Avenida Visconde de Jequitinhonha", bairro: "Boa Viagem", data: "20/09/2020", hora: "09:20", status: "Interrompido"},
                    {rua: "Rua Djanira", bairro: "Tamarineira", data: "20/09/2020", hora: "09:20", status: "Concluido"},
                    {rua: "Rua Padre Euclides Jardim", bairro: "Afogados", data: "20/09/2020", hora: "09:20", status: "Concluido"},
                    {rua: "Rua Padre Euclides Jardim", bairro: "Afogados", data: "20/09/2020", hora: "09:20", status: "Concluido"},
                    {rua: "Rua Padre Euclides Jardim", bairro: "Afogados", data: "20/09/2020", hora: "09:20", status: "Concluido"},
                    {rua: "Rua Padre Euclides Jardim", bairro: "Afogados", data: "20/09/2020", hora: "09:20", status: "Concluido"},
                    {rua: "Rua Padre Euclides Jardim", bairro: "Afogados", data: "20/09/2020", hora: "09:20", status: "Concluido"},
                    {rua: "Rua Padre Euclides Jardim", bairro: "Afogados", data: "20/09/2020", hora: "09:20", status: "Concluido"},
                    {rua: "Rua Padre Euclides Jardim", bairro: "Afogados", data: "20/09/2020", hora: "09:20", status: "Concluido"},

                ]} />

            </div>

        </div>

    );
  }
}

export default SuaAtividadeRepordados