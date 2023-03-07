import Card from './Card'
import { useState } from 'react'
import Styles from './Styles.css'

function App() {

  const [libro,setLibro] = useState({
    titulo:'',
    autor:''
  })

  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

  const handleSubmit = (event) =>{
    event.preventDefault()
    const arrayTitulo = libro.titulo.split("")
    if(arrayTitulo[0] !==" " && libro.titulo.length >= 3 && libro.autor.length >= 6){
        setShow(true)
        setErr(false)
      }else{
        setErr(true)
      }
    
  }

  return (
    <div className="App">
      <h2>Administración de libros</h2>
      <form className='formulario' onSubmit={handleSubmit}>
        <label >Titulo</label>
        <input type="text" onChange={(event) => setLibro({...libro, titulo: event.target.value})}/>
        <label>Autor</label>
        <input type="text" onChange={(event) => setLibro({...libro, autor: event.target.value})}/>
        <button className='boton'>Enviar</button>
        {err && <h3 className='advertencia'>Por favor chequea que la información sea correcta</h3>}
      </form>
      {show && <Card titulo={libro.titulo} autor={libro.autor}/>}
    </div>
  )
}

export default App
