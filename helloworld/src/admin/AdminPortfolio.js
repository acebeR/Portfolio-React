import React, {Component} from 'react'
import config, {storage} from './../firebase-config'

class AdminPortfolio extends Component{
    constructor(props){
        super(props)
        

        this.state ={
            estaGravando : false
        }

        this.gravaPortfolio = this.gravaPortfolio.bind(this) 
        //Colocar os dois no mesmo escopo
    }
    
    gravaPortfolio(e){
        const itemPortifolio = {
            descricao: this.descricao.value,
            imagem: this.imagem,
            titulo: this.titulo.value
        }

        this.setState({estaGravando: true})
        console.log('gravar')
        console.log(this.titulo.value)

        const arquivo = itemPortifolio.imagem.files[0]
        const {name, size, type} = arquivo

        const ref = storage.ref(name)
        ref.put(arquivo).then(img =>{
           img.ref.getDownloadURL()
           .then(dowloadURL =>{
               //Objeto
               const novoPortfolio = {
                   descricao: itemPortifolio.descricao,
                   imagem: dowloadURL,
                   titulo: itemPortifolio.titulo
               }
    
               // Para gravar no banco
               config.push('portfolio',{
                   data: novoPortfolio
               }) 
               this.setState({estaGravando: false})
           })
            
        })

        e.preventDefault()
    }
    render(){
        if(this.state.estaGravando){
            return(
                <div className= 'container'>
                    <p><span className="glyphicon glyphicon-refresh"/>aguarde...</p>
                </div>
            )
        }
        return(
            <div style={{padding: '120px'}}>

                <form onSubmit={this.gravaPortfolio}>
                    <div className="form-group">
                        <label htmlfor="titulo">Titulo</label>
                        <input type="text" class="form-control" id="titulo" aria-describedby="emailHelp" placeholder="Titulo" ref={(ref) => this.titulo = ref}/>
                        
                    </div>
                    <div className="form-group">
                        <label htmlfor="descricao">Descricao</label>
                        <textarea class="form-control" id="descricao" rows="3" ref={(ref) => this.descricao = ref}></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlfor="imagem">Example file input</label>
                        <input type="file" class="form-control-file" id="imagem" ref={(ref) => this.imagem = ref}/>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

            
        )
    }
}
export default AdminPortfolio