import { useState } from 'react'
import Botao from '../Botao'
import CampoTexo from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = (props) => {

    const [titulo, setTitulo] = useState('')
    const [imagem, setImagem] = useState('')
    const [comentarios, setComentarios] = useState('')
    const [status, setStatus] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault();
        props.paraSerieCadastrada({
            titulo,
            imagem, 
            comentarios, 
            status
        })
        setTitulo('')
        setImagem('')
        setComentarios('')
        setStatus('')   
    }

    return(
        <section className='formulario'>
            <h2>Preencha os dados e crie um card</h2>
            <form onSubmit={aoSalvar}>
                <CampoTexo 
                    obrigatorio={true} 
                    label="Título" 
                    placeholder="Escolha seu texto, anime ou série"
                    valor={titulo}
                    aoAlterado={valor => setTitulo(valor)}
                />
                <CampoTexo 
                    obrigatorio={true} 
                    label="Comentários" 
                    placeholder="O que você achou?"
                    valor={comentarios}
                    aoAlterado={valor => setComentarios(valor)}
                />
                <CampoTexo 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Cole o endereço de imagem aqui"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Status" 
                    itens={props.situacao}
                    valor={status}
                    aoAlterado={valor => setStatus(valor)}
                />
                <Botao texto="Criar Card"/>
            </form>
        </section>
    )
}

export default Formulario 