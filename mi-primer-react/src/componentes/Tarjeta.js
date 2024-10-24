import './Tarjeta.css'

const Tarjeta = ({ nombre, apellido}) => {
  return (
    <div className="tarjeta-container">
      <span>{nombre}</span>
      <span>{apellido}</span>
    </div>
  )
}

export default Tarjeta