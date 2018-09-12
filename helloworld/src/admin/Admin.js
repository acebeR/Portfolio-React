import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {auth} from './../firebase-config'

import AdminMenu from './AdminMenu'
import AdminPortfolio from './AdminPortfolio'

class Admin extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            estaLogando: true,
            estaAutenticando: false,
            user: null
        }
    }
    
    componentDidMount(){
        auth.onAuthStateChanged(user =>{
            this.setState({
                estaLogando: false,
                estaAutenticando: !!user,
                user
            })
        })
    }
    
    render(){
        
        if(this.state.estaLogando){
            return (
                <div className='container'>
                    <p><span className="glyphicon glyphicon-refresh"/>aguarde...</p>
                </div>
            )
        }
        if(!this.state.estaAutenticando){
            return <Redirect to='/Login'/>
        }
        
        return(
            <div>

                <h2>Painel Administrativo</h2>
                
                <Route path = {`/`} component={AdminMenu}/>
                <Route pathname={`${this.props.match.url}/portfolio`} component = {AdminPortfolio}/>{/*Peguei o pathname com o JSON*/}
                
                
            </div>
        )

    }
}
export default Admin