import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = ({paraSerieCadastrada, situacao, cadastrarStatus}) => {

    const [titulo, setTitulo] = useState('')
    const [imagem, setImagem] = useState('')
    const [comentarios, setComentarios] = useState('')
    const [status, setStatus] = useState('')
    const [nome, setNome] = useState('')
    const [corPrimaria, setCorPrimaria] = useState('')


    const aoSalvar = (event) => {
        event.preventDefault();
        paraSerieCadastrada({
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
        <>
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados e crie um card</h2>
                <Campo 
                    obrigatorio={true} 
                    label="Título" 
                    placeholder="Escolha seu texto, anime ou série"
                    valor={titulo}
                    aoAlterado={valor => setTitulo(valor)}
                />
                <Campo 
                    obrigatorio={true} 
                    label="Comentários" 
                    placeholder="O que você achou?"
                    valor={comentarios}
                    aoAlterado={valor => setComentarios(valor)}
                />
                <Campo 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Cole o endereço de imagem aqui"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Status" 
                    itens={situacao}
                    valor={status}
                    aoAlterado={valor => setStatus(valor)}
                />
                <Botao texto="Criar Card"/>
            </form>
            
        </section>
        <section className='formulario'>
        <form onSubmit={(evento) => {
                evento.preventDefault()
                cadastrarStatus({nome, corPrimaria})
                setNome('')
                setCorPrimaria('')
            }}>
                <h2>Crie um novo status</h2>
                <Campo 
                    obrigatorio 
                    label="Nome" 
                    placeholder="assistir no futuro..."
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo 
                    obrigatorio={true}
                    type="color" 
                    label="Cor" 
                    placeholder="Digite a cor do status"
                    valor={corPrimaria}
                    aoAlterado={valor => setCorPrimaria(valor)}
                />
                <Botao texto="Criar Status"/>
            </form>
        </section>
        </>
    )
}

export default Formulario 