import './Navbar.css'

const Navbar = ({ cambiarMostrarModal }) => {
  return (
    <div className="navbar-container">
      <button onClick={cambiarMostrarModal} className="navbar-button">iniciar sesión</button>
    </div>
  )
}

export default Navbar
