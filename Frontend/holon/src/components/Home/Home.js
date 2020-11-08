import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
                reporte: false,
                curTime: new Date().toLocaleString(),
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
                    [event.target.name]: event.target.value
        });
    }

    componentDidMount(){
        let reportCookies = cookies.get("finished")
        this.setState({
            reporte : reportCookies
        });
        console.log(reportCookies);
        console.log(this.state.reporte);
    }
    
    render() {
        if (this.state.reporte === true) {
            return (
                <>
                <div className='ReportBox'>
                <h3 className="TextoReportBox">Chamado Registrado!</h3>
                <h6 className="EditButton">Editar</h6>
                <p>{this.state.curTime}</p>
                <Link className="Details">Detalhes</Link>
                </div>
                <div className='Text' id="text-attributes">A mudança começa com você</div>
                <div className='bottomText' id="text-attributes">Faça parte de uma rede de auxílio dedicada a ajudar pessoas em situação de rua através de uma simples plataforma online</div>
                <div className="btnChamado">
                {<a href="/" className="linkChamado">Abrir um chamado</a>}
                </div>
                </>
            );
        }
        else {
            return (
                <>
                <div className='Text' id="text-attributes">A mudança começa com você</div>
                <div className='bottomText' id="text-attributes">Faça parte de uma rede de auxílio dedicada a ajudar pessoas em situação de rua através de uma simples plataforma online</div>
                <div className="btnChamado">
                <Link className="linkChamado" to="reporte/P1">Abrir um chamado</Link>
                {/* {<a href="/" className="linkChamado">Abrir um chamado</a>} */}
                </div>
                </>
            );
        };
    }
}
export default Home;