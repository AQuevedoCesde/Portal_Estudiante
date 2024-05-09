import imgAdd from '../../../../assets/imgadd.png'
import { useNavigate } from 'react-router-dom'

function Header({NombreBoton,ruta,editar }) {
let redirigir = useNavigate()
  return (
    <header>
        <h1>Portal del Estudiante</h1>
        <button onClick={() => redirigir(ruta)} id='Registrar'><p>{NombreBoton}</p><div id='out'><div id='in'>
          <img src={imgAdd} alt='imgAdd'/></div></div></button>   
    </header>
  )
}

export default Header   
