import './Buscador.css'

const Buscador = () => {
  return (
    <div className='buscador-container'>
      <div className="buscador">
        <input className='buscador-input' placeholder='Buscar...' type="text" />
      </div>
    </div>
  )
}

export default Buscador