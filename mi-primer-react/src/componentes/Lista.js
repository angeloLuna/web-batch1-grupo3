import './Lista.css'
import Tarjeta from './Tarjeta'

const Lista = () => {
  return (
    <div className='lista-container'>
      <Tarjeta nombre="Juan" apellido="Rubio" />
      <Tarjeta nombre="Angelo" apellido="Luna" />
      <Tarjeta nombre="Anuar" apellido="Harb" />
      <Tarjeta nombre="Juan" apellido="Rubio" />
      <Tarjeta nombre="Angelo" apellido="Luna" />
      <Tarjeta nombre="Anuar" apellido="Harb" />
    </div>
  )
}

export default Lista