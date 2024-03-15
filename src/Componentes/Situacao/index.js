import Serie from '../Serie'
import './Situacao.css'

const Situacao = ({situacao, series, aoDeletar, mudarCor, corPrimaria, aoFavoritar}) => {
    return (
        (series.length > 0) ? <section className='situacao'>
            <input type='color' onChange={evento => mudarCor(evento.target.value)} value={corPrimaria} className='input-color' />
            <h3 style={{borderColor: corPrimaria, color: corPrimaria}}>
                {situacao}</h3>
            <div className='series'>
                {series.map( serie => {
                    console.log('renderizando serie')
                    return <Serie
                        corDeFundo={corPrimaria}
                        key={serie.titulo}  
                        titulo={serie.titulo} 
                        comentarios={serie.comentarios} 
                        imagem={serie.imagem}
                        aoDeletar={aoDeletar}
                        serie={serie}
                        aoFavoritar={aoFavoritar}
                    />    
                })}
            </div>
        </section>
        : ''
    )
}

export default Situacao