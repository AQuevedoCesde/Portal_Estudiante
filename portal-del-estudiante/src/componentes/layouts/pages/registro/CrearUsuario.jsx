import '../../pagesCss/registro.css'
import Footer from "../inicio/Footer"
import Header from "../inicio/Header"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import axios from 'axios'
import Menu from '../inicio/Menu'
let apiEstudiantes = 'http://localhost:2222/Estudiantes'


let NombreBoton = "Cancelar Reguistro"
let ruta = "/"

function CrearUsuario() {
  let redirigir = useNavigate()

  const[getEmail,setEmail]= useState("")
  const[getPhone,setPhone]= useState("")
  const[getNombres,setNombres]= useState("")
  const[getApellidos,setApellidos]= useState("")
  const[getEdad,setEdad]= useState("")
  const[getDocumento,setDocumento]= useState("")
  const[getGenero,setGenero]= useState("")
  const[getSede,setSede]= useState("")
  const[getPrograma,setPrograma]= useState("")
  const[getAsignacioUno,setAsignacion1]= useState("")
  const[getAsignacioDos,setAsignacion2]= useState("")
  const[getAsignacioTres,setAsignacion3]= useState("")
  const [buttonLabel, setButtonLabel] = useState('Initial Label');

  let CrearEstudiante = () =>{
    let datosEstudiante = {
      email:getEmail,
      telefono:getPhone,
      nombres:getNombres,
      apellidos:getApellidos,
      edad:getEdad,
      id:getDocumento,
      genero:getGenero,
      sede:getSede,
      programa:getPrograma,
      asignacioUno:getAsignacioUno,
      asignacioDos:getAsignacioDos,
      asignacioTres:getAsignacioTres,
  }
  axios.post(apiEstudiantes,datosEstudiante)
  redirigir("/")
  setButtonLabel(buttonLabel)
  }



  return (
    <>
   <Header NombreBoton={NombreBoton} ruta={ruta}/>
    <div className='contenedoPrincipal'>
      <Menu/>
      <main className="reguistrarUsuario">
        <div>
          <h2>Registrar Estudiante</h2>
          <div>
            <div className='infContac'>
               <h3>Informacion de contacto </h3>
              <input  onChange={(e) => {setEmail(e.target.value),setvali}}type="text" placeholder = "Email"/>
              <input onChange={(e)=> {setPhone(e.target.value)} } type="phone" placeholder="Telefono" />
            </div>
            <h3>Informacion Personal</h3>
            <div className='Nombreyapellido'>
              
                <input onChange={(e) => {setNombres(e.target.value)}} type="text" placeholder="Nombres" />
                <input onChange={(e) => {setApellidos(e.target.value)}} type="text" placeholder="Apellidos" />
            </div>
                <input onChange={(e) => {setEdad(e.target.value)}} type="text" placeholder="Edad" />
                <input onChange={(e) => {setDocumento(e.target.value)}} type="text" placeholder="Numero De Documento" />
                <select onChange={(e) => {setGenero(e.target.value)}}>
                  <option value="">Genero</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                </select>
           
            <h3>Informacion academica</h3>
            <div>
              <select   onChange={(e) => {setSede(e.target.value)}} >
                <option value="">Sede</option>
                <option value="Medellin">Medellin</option>
                <option value="Bello">Bello</option>
                <option value="Bogota">Bogota</option>
              </select>
              <select  className = 'infAcademica' onChange={(e) => {setPrograma(e.target.value)}}  >
                <option value="">Programa Academico</option>
                <option value="Desarrollo de Software">Desarrollo de Software</option>
                <option value="Diseño">Diseño Grafico</option>
                <option value="Mercadeo">Mercadeo</option>
                <option value="Seguridad">Seguridad Laboral</option>
                <option value="Talento">Talento Humano</option>
                <option value="Sistemas">Sistemas</option>
              </select>
              <select onChange={(e) => {setPrograma(e.target.value)}}  >
                <option value="">Semestre</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
           </div>
            <input className ="asignaciones"  onChange={(e) => {setAsignacion1(e.target.value)}} type="text" placeholder="Asignacion numero 1" />
            <input className ="asignaciones"  onChange={(e) => {setAsignacion2(e.target.value)}} type="text" placeholder="Asignacion numero 2" />
            <input  className ="asignaciones" onChange={(e) => {setAsignacion3(e.target.value)}} type="text" placeholder="Asignacion numero 3"/>
            <div className='IntroducirNota'>
            </div>
          </div>
          <button id='GuardarRegistro' onClick={CrearEstudiante}>Guarda Estudiante</button> 
        </div>
      </main>
    </div>
    <Footer/>
    </>
    
  )
}

export default CrearUsuario

