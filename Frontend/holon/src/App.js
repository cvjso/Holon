import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Itens/Home/Home';
import Comodarassistencia from './components/Itens/Como dar Assistência/Comodarassistencia';
import Faq from './components/Itens/FAQ/Faq';
import SobreNos from './components/Itens/Sobre Nós/SobreNos';
import Ajuda from './components/Itens/Ajuda/Ajuda';
import Entrar from './components/Itens/Entrar/Entrar';
import Cadastrar from './components/Itens/Cadastrar/Cadastrar';

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
      </Switch>
    </Router>
  );
}

export default App;
