import React from 'react'
import {Link} from 'react-router-dom'

const Cabecalho = props => {
    return(
        <div>
              <div className='jumbotron text-center'>
                <h1>Países</h1> 
                <p>Para você visitar, estudar ou apenas sonhar com eles.</p> 
                <form>
                    <div className='input-group'>
                        <input type='email' className='form-control' size='50' placeholder='Email Address' required/>
                        <div className='input-group-btn'>
                            <button type='button' className='btn btn-danger'>Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>
            <nav className='navbar navbar-default navbar-fixed-top'>
                <div className='container'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>    
                            <Link to="/">Logo</Link>                    
                        </button>
                        
                    </div>
                    <div className='collapse navbar-collapse' id='myNavbar'>
                        <ul className='nav navbar-nav navbar-right'>
                            
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/Servicos">Servicos</Link></li>
                            <li><Link to='/Portifolio'>Portfolio</Link></li>
                            <li><Link to='/Admin'>Admin</Link></li>
                            <li><Link to='/Contatos'>Contatos</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
          
        </div>    
    )
   
}
export default Cabecalho