import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import NavBar from './components/NavBar';
import Comodarassistencia from './components/ComodarAssistencia/Comodarassistencia';
import Faq from './components/FAQ/Faq';
import SobreNos from './components/SobreNos/SobreNos';
import Ajuda from './components/Ajuda/Ajuda';
import Entrar from './components/Entrar/Entrar.js';
import Cadastrar from './components/Cadastrar/Cadastrar';
import ReportePSR from './components/PSR/Cadastro/ReportePSR';
import NecessidadesPSR from './components/PSR/Cadastro/NecessidadesPSR';
import ResumoPSR from './components/PSR/Cadastro/ResumoPSR';
import './App.css';

function App() {
  return (
    <div className="Main">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/como-dar-assistencia' component={Comodarassistencia} />
          <Route path='/faq' component={Faq} />
          <Route path='/sobre-nos' component={SobreNos} />
          <Route path='/ajuda' component={Ajuda} />
          <Route path='/entrar' component={Entrar} />
          <Route path='/cadastrar' component={Cadastrar} />
          <Route path='/reporte/P1' component={ReportePSR}/>
          <Route path='/reporte/P2' component={NecessidadesPSR}/>
          <Route path='/reporte/P3' component={ResumoPSR}/>
          <Route path='/reporte' component={ReportePSR}/>
          {/* <Route path='/detalhes' component={Detalhes}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
