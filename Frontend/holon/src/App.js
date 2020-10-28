import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/NavBar';
import Comodarassistencia from './components/ComodarAssistencia/Comodarassistencia';
import Faq from './components/FAQ/Faq';
import SobreNos from './components/SobreNos/SobreNos';
import Ajuda from './components/Ajuda/Ajuda';
import Entrar from './components/Entrar/Entrar.js';
import Cadastrar from './components/Cadastrar/Cadastrar';
import ReportePSR from './components/ReportePSR';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/como-dar-assistencia' component={Comodarassistencia} />
        <Route path='/faq' component={Faq} />
        <Route path='/sobre-nos' component={SobreNos} />
        <Route path='/ajuda' component={Ajuda} />
        <Route path='/entrar' component={Entrar} />
        <Route path='/cadastrar' component={Cadastrar} />
        <Route path='/reporte' component={ReportePSR}/>
      </Switch>
    </Router>
  );
}

export default App;
