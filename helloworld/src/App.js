import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/Cabecalho'
import Inicio from './componentes/Inicio'
import Servicos from './componentes/Servicos'
import Portifolio from './componentes/Portifolio'
import Precos from './componentes/Precos'
import Contatos from './componentes/Contatos'
import Login from './componentes/Login'
// Parte Administrativa
import Admin from './admin/Admin'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

            <Cabecalho/>
            <Route path='/' exact component={Inicio}/> {/* <Inicio/>*/}
            <Route path='/Servicos' component={Servicos}/>{/* <Servicos/>*/}
            <Route path='/Portifolio' component={Portifolio}/>{/* <Portifolio/>*/}
            <Route path='/Precos' component={Precos}/>{/* <Precos/>*/}
            <Route path='/Contatos' component={Contatos}/>{/* <Contatos/>*/}
            <Route path='/Admin' component={Admin}/>{/* <Admin/>*/}
            <Route path='/Login' component={Login}/>
            <Rodape />
  
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
