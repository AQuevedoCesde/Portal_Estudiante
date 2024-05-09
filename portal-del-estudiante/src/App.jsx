import '../src/componentes/layouts/pagesCss/home.css'
import { useState, useEffect } from 'react'
import Footer from './componentes/layouts/pages/inicio/Footer'
import Header from './componentes/layouts/pages/inicio/Header'
import axios from 'axios'
import Menu from './componentes/layouts/pages/inicio/Menu'
let apiEstudiantes = 'http://localhost:2222/Estudiantes'
let NombreBoton = "Nuevo reguistro"
let ruta = "/registrar"
  

function App() {

    const [getEstudiantes,setEstudiantes] = useState([])
     const TraerDatos  = () => {
        return axios.get(apiEstudiantes)
        .then((respuesta) => setEstudiantes(respuesta.data))
    }

    useEffect(() =>{
      TraerDatos()
    },[])

  return (
    <>
   <Header NombreBoton={NombreBoton} ruta={ruta}  />
    <div className='contenedoPrincipal'>
     <Menu/>
      <main className='tarjetasInformacioEstudiante' >
       <div className='tarjetasInformacioEstudiante'>{getEstudiantes.map((estudiante) => (
        <div className= "tarjetas" key = {estudiante.id}>
            <h4 id='nombreyapellido'>{`${estudiante.nombres} ${estudiante.apellidos}`}</h4>
            <h5 id= 'programa'>{estudiante.programa}</h5>
             <h6 id='sede'>{estudiante.sede}</h6>
             <h4 id = 'tituloPersonal'>Informacion Personal</h4>
           <ul className='listadoPersonal'>
              <li>{estudiante.id}</li>
              <li>{estudiante.email}</li>
              <li>{estudiante.telefono}</li>
              <li>{`${estudiante.genero} - ${estudiante.edad} años`}</li>
            </ul> 
        </div>
       ))}</div>
    </main>
    </div>
    <Footer/>
    </>
  )
}

export default App  
