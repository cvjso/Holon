import React, { useState } from 'react';
import { Component } from 'react';
import './detalhes.css';
import { Link } from 'react-router-dom';

export class Detalhes extends Component {
  render() {
    return (
        <div className="Main">

            <div className="ParteSuperior">

                <Link 
                    to='/' 
                    className='back-icon' 
                >
                    <i class='fas fa-chevron-left' />
                </Link>
                <h1 className='topText'>Detalhes</h1>

            </div>

            <div className="DivInicioConclusao">
                <div className="DataInicio">
                    <div id="lbAttributes">Início</div>
                    <div id="lbDataHora">01/10/2020 9:30</div>
                </div>
                <div className="DataConclusao">
                    <div id="lbAttributes">Conclusão</div>
                    <div id="lbDataHora">Ainda não concluido</div>
                </div>
            </div>

            <div className="DivInformacoes">
                <div className="localizacaoTitle" id="titleAttributes">Localização Aproximada</div>
                <div className="localizacaoItem" id="itemAttributes">R. Maria João, 274 Bairro do Recife</div>
                <div className="identificarTitle" id="titleAttributes">Como identificar?</div>
                <div className="identificarItem" id="itemAttributes">Homem alto, por volta dos 50 anos, camisa vermelha</div>
                <div className="precisaTitle">O que precisa?</div>
                <div className="precisaCamisa" id="itemAttributes">
                    <h3 className="roupaTitle" id="precisaAttributes">Roupa</h3>
                </div>
                <div className="roupaItem">Camisa</div>

                <div className="precisaComida" id="itemAttributes">
                    <h3 className="roupaTitle" id="precisaAttributes">Comida</h3>
                </div>
                <div className="roupaItem">01 refeição</div>

                <div className="precisaAgua" id="itemAttributes">
                    <h3 className="roupaTitle" id="precisaAttributes">Água</h3>
                </div>
                <div className="roupaItem">01 L</div>

                <div className="grauPrioridade" id="titleAttributes">Grau de prioridade</div>
                
                <div>
                    <div className="sizePrioridade"></div>
                    <div className="porcentagemPrioridade">Alto</div>
                </div>
                

            </div>

            <div>
                <button className="btCancelar">CANCELAR CHAMADO</button>
            </div>
            

        </div>

    );
  }
}

export default Detalhes