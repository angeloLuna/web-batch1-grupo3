import './Navbar.css'

const Navbar = ({ hacerClick }) => {
  return (
    <div className='navbar-contenedor'>
      <div onClick={hacerClick} className="navbar-button-login">
        Iniciar sesión
      </div>
    </div>
  )
}

export default Navbar