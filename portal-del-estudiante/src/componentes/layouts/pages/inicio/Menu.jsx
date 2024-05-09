import Genero from './Genero'

function Menu() {
  return (
    <nav>
    <Genero/>
      <section className='Programas'>
        <ul>
        <li className='listaProgramas'>Desarrollo De Software</li>
          <hr />
          <li className='listaProgramas'>Diseño Grafico</li>
          <hr />
          <li className='listaProgramas'>Mercadeo</li>
          <hr />
          <li className='listaProgramas'>Seguridad Laboral</li>
          <hr />
          <li className='listaProgramas'>Talento Humano</li>
          <hr />
          <li className='listaProgramas'>Sistemas</li>
          <hr />  
        </ul>
      </section>
    </nav>
  )
}

export default Menu
