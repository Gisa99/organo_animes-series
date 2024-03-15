import './Campo.css'


const Campo =  ({type ='text',  aoAlterado, valor, obrigatorio = false, placeholder, label }) =>{
    
    const aoDigitado = (evento) =>{
        aoAlterado(evento.target.value)
    }
    return(
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
              onChange={aoDigitado} 
              value={valor} 
              required={obrigatorio} 
              placeholder={placeholder}
              type={type}
            />
        </div>

    )
}

export default Campo