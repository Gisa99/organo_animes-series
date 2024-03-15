import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Situacao from './Componentes/Situacao';
import { v4 as uuidv4 } from 'uuid';



function App() {

  const [situacao, setSituacao] = useState([
    {
      id: uuidv4(),
      nome: 'Selecione o status',
      corPrimaria: '#F3F894',
    },
    {
      id: uuidv4(),
      nome: 'Pendente',
      corPrimaria: '#F0F852',
    },
    {
      id: uuidv4(),
      nome: 'Dropei',
      corPrimaria: '#F8446A',
    },
    {
      id: uuidv4(),
      nome: 'Concluído',
      corPrimaria: '#30FFAE',
    }
  ])

  const [series, setSeries] = useState([])

  const paraNovaSerieAdicionada = (serie) => {
    const novaSerie = { ...serie, id: uuidv4() }
    const favorito = { ...serie, favorito: false}
    setSeries([...series, novaSerie])
    setSeries([...series, favorito])
  }

  function deletarSerie(id){
    setSeries(series.filter(serie => serie.id !== id));
  }
 
  function mudarCorDaSituacao(cor, id){
    setSituacao(situacao.map(status => {
      if(status.id === id){
        status.corPrimaria = cor
      }
      return status
    }))
  }

  function cadastrarStatus(novoStatus){
    setSituacao([...situacao, novoStatus])

  }

  function resolverFavorito(id){
    setSeries(series.map( serie => {
      if(serie.id === id) serie.favorito = !serie.favorito
      return serie
    }))
  }

  return (
    <div className='App'>
      <Banner />
      <Formulario
        cadastrarStatus={cadastrarStatus}
        situacao={situacao.map(status => status.nome)} 
        paraSerieCadastrada={serie => paraNovaSerieAdicionada(serie)}
      />
      {situacao.map(situacao => 
      <Situacao
        aoFavoritar={resolverFavorito}
        mudarCor={(cor) => mudarCorDaSituacao(cor, situacao.id)} 
        key={situacao.nome} 
        situacao={situacao.nome}
        corPrimaria={situacao.corPrimaria}
        series={series.filter(serie => serie.status === situacao.nome )} //colaboradores
        aoDeletar={deletarSerie}
      />
    )}
     
    </div>
  )
}

export default App;
