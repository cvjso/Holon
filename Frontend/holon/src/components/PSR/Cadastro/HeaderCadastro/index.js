import React, { Component } from 'react';
import './styles.css';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';

const cookies = new Cookies();

export class HeaderCadastro extends Component {
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="PSR-Title">
                <text>Reportar</text>
            </div>
        )
    }

}
export default HeaderCadastro