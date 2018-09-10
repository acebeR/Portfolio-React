import React from 'react'

const ItemPortfolio = props => {
    // Estou chamndo apenas o props pq já inicie na const
    return (
        <div className='col-sm-4'>
            <div className='thumbnail'>
             {/* <p>{JSON.stringify(props)}</p>  */}
                <img src={props.conteudo.imagem} width='400' height='300'/>
                 <p><strong>{props.conteudo.titulo}</strong></p>
                <p>{props.conteudo.descricao}</p>
            </div>
        </div>
    )
}

export default ItemPortfolio