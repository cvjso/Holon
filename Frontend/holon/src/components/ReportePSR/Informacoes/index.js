import React, { useState } from 'react';
import { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export class Detalhes extends Component {
  render() {
    return (
        <div className="Main">

            <div className = "Titulo">
                Informacoes
            </div>

            <div className="DivInformacoes">
                <div className="localizacaoTitle" id="titleAttributes">Início do Chamado</div>
                <div className="localizacaoItem" id="itemAttributes">01/10/2020, 9:20</div>
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

            <div className="LinhaDivisoria"></div>

            <div className = "Titulo">
                O que você doou?
            </div>

            <div className="DivInformacoes">
                

                <div className="precisaCamisa" id="itemAttributes">
                    <h3 className="roupaTitle" id="precisaAttributes">Roupa</h3>
                </div>
                <div className="roupaItem">Camisa(s)</div>
                <div className="roupaItem">Calça(s)/Bermudas/Short(s)</div>
                <div className="roupaItem">Calçados</div>
                <input className="inputsDoacao" placeholder="    Escreva aqui"></input>

                <div className="precisaComida" id="itemAttributes">
                    <h3 className="roupaTitle" id="precisaAttributes">Comida</h3>
                </div>
                <input className="inputsDoacao" placeholder="    Escreva aqui"></input>

                <div className="precisaAgua" id="itemAttributes">
                    <h3 className="roupaTitle" id="precisaAttributes" >Água</h3>
                </div>
                <div className="roupaItem">500 mL</div>
                <div className="roupaItem">1 L</div>
                <div className="roupaItem">2 L</div>
                <div className="roupaItem">5 L</div>
                <input className="inputsDoacao" placeholder="    Escreva aqui"></input>

                <div className="precisaOutras" id="itemAttributes">
                    <h3 className="roupaTitle" id="precisaAttributes">Outras Doações</h3>
                </div>
                <input className="inputsDoacao" placeholder="    Escreva aqui"></input>

            </div>

            <div>
                <button className="btCancelar">AJUDA CONCLUÍDA</button>
            </div>
            

        </div>

    );
  }
}

export default Detalhes