import { AiFillCloseCircle } from 'react-icons/ai'
import './Serie.css'

const Serie = (props) =>{
    return (
        <div className='serie'>
            <AiFillCloseCircle size={25} className='deletar' onClick={props.aoDeletar} />
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo }}>
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className='rodape'>
                <h4>{props.titulo}</h4>
                <p>{props.comentarios}</p>
            </div>
        </div>
    )
}

export default Serie 