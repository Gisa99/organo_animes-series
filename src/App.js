import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Situacao from './Componentes/Situacao';



function App() {

  const situacao =[
    {
      nome: 'Selecione o status',
      corPrimaria: '#F3F894',
    },
    {
      nome: 'Pendente',
      corPrimaria: '#F0F852',
    },
    {
      nome: 'Dropei',
      corPrimaria: '#F8446A',
    },
    {
      nome: 'Concluído',
      corPrimaria: '#30FFAE',
    }
  ]
  const [series, setSeries] = useState([])

  const paraNovaSerieAdicionada = (serie) =>{
    setSeries([...series, serie])
  }
 
  return (
    <div className='App'>
      <Banner />
      <Formulario situacao={situacao.map(status => status.nome)} paraSerieCadastrada={serie => paraNovaSerieAdicionada(serie)}/>
      {situacao.map(status => <Situacao 
      key={status.nome} 
      status={status.nome}  
      corPrimaria={status.corPrimaria}
      series={series.filter(serie => serie.status === status.nome )}
      />)}
     
    </div>
  )
}

export default App;
