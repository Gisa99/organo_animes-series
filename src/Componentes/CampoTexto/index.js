import { useState } from 'react'
import './CampoTexto.css'


const CampoTexo =  (props) =>{
    //let valor = '' 

    const [valor, setValor] = useState('')

    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
    
    }
    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input
              onChange={aoDigitado} 
              value={props.valor} 
              required={props.obrigatorio} 
              placeholder={props.placeholder}
            />
        </div>

    )
}

export default CampoTexo