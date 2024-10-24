import  './estilosCard.css'

const Card = ({name, url}) => {
  return (
    <div className="tarjeta">
      <div className="borde">

        <div className="encabezado">
          <span className="nombre">{name}</span>
        </div>
        <div className="imagen">
          <img className='imagen' src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2024/06/20/17188713292906.jpg" alt="" />
        </div>
        <div className="texto">
          <div className="truco">
            <span className="rol">Hechicera</span>
          </div>
          <p>{url}</p>
        </div>
      </div>
    </div>
  )
}

export default Card