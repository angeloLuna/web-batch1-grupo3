import { useState } from 'react'
import Navbar from "./componentes/Navbar";
import Tarjeta from './componentes/Tarjeta';
import Lista from './componentes/Lista';

const App = () => {
  let [mostrarModal, setMostrarModal] = useState(false)

  const cambiarMostrarModal = () => {
    console.log('click');
    setMostrarModal( !mostrarModal )
  }
  console.log(mostrarModal)

  return (
    <div className="app-container">
      <Navbar cambiarMostrarModal={cambiarMostrarModal} />
      <Lista />

    </div>
  );
}

export default App;
