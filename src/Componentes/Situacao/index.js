import Serie from '../Serie'
import './Situacao.css'

const Situacao = (props) => {
    return (
        (props.series.length > 0) ? <section className='situacao'>
            <h3 style={{borderColor:  props.corPrimaria, color: props.corPrimaria}}>
                {props.status}</h3>
            <div className='series'>
                {props.series.map( serie => <Serie
                corDeFundo={props.corPrimaria}
                key={serie.titulo}  
                titulo={serie.titulo} 
                comentarios={serie.comentarios} 
                imagem={serie.imagem}
            />)}
            </div>
        </section>
        : ''
    )
}

export default Situacao