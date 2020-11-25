import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Cookies from 'universal-cookie';
import Facebook from '../FacebookBtn/index';
import GoogleBtn from '../GoogleBtn/index';
import { render } from '@testing-library/react';

const cookies = new Cookies();

class ListaChamados extends Component {
    constructor(props) {
        super(props);
        this.state = {chamados: this.props.chamados}
    }

        render() {
            return(
                <div>
                    {
                        this.state.chamados.map(c => {
                            return (
                                <div className='ReportBox'>
                                    <h3 className="TextoReportBox">Chamado Registrado!</h3>
                                    <h6 className="EditButton">Editar</h6>
                                    <p>{c.data}</p>
                                    <div className="Details">
                                        <Link>Detalhes</Link>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            );
        }
}

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
        //if (this.state.reporte === false) {
        if (true) {
            return (
                <div>
                    <ListaChamados chamados={[
                        {data: "09/10/2020, 10:30"},
                        {data: "01/11/2020, 15:22"},
                    ]} />

                    <div className='Text' id="text-attributes">A mudança começa com você</div>
                    <div className='bottomText' id="text-attributes">Faça parte de uma rede de auxílio dedicada a ajudar pessoas em situação de rua através de uma simples plataforma online</div>
                    <div className="btnChamado">
                    {<a href="/" className="linkChamado">Abrir um chamado</a>}
                    </div>
                </div>
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