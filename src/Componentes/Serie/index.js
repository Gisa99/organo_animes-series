import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import './Serie.css'

const Serie = ({ titulo, imagem, nome, comentarios, corDeFundo, aoDeletar, serie, aoFavoritar}) =>{
    function favoritar(){
        aoFavoritar(serie.id)
    }
    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }
    return (
        <div className='serie'>
            <AiFillCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => aoDeletar(serie.id)} />
            <div className='cabecalho' style={{backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{titulo}</h4>
                <p>{comentarios}</p>
                <div className='favoritar'>
                    {serie.favorito 
                      ? <AiFillHeart {...propsFavorito} color='#ff0000'  /> 
                      : <AiOutlineHeart {...propsFavorito} /> 
                    }
                </div>
            </div>
        </div>
    )
}

export default Serie 