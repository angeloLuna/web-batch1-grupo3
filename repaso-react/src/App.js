import { useState } from 'react';
import './App.css';
import Navbar from './componentes/Navbar';

function App() {

  const [mostrarTarjeta, setMostrarTarjeta] = useState(false)

  const datos = [
    {
      nombre: 'jinx',
      img: 'https://i.pinimg.com/736x/77/ba/70/77ba703115b585101d5c73d7a357ab05.jpg',
      desc: 'la bala perdida'
    },
    {
      nombre: 'jhin',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGSyom4QTMGB7oFQeI4wu689CzTu-IRbkuzQ&s',
      desc: 'El virtuoso'
    },
    {
      nombre: 'Aurora',
      img: 'https://phantom-marca.unidadeditorial.es/08884af89fd495e999d2462b15877f3a/resize/1200/f/webp/assets/multimedia/imagenes/2024/06/20/17188713292906.jpg',
      desc: 'Hechicera de algo que no me acuerdo'
    }
  ]

  const hacerClick = () => {
    console.log('click');
    setMostrarTarjeta(!mostrarTarjeta)
  }

  console.log('mostrarTarjeta', mostrarTarjeta);
  
  return (
    <div className="App">
      
      <Navbar hacerClick={hacerClick} />
      {
        // mostrarTarjeta && <span>Esta es una tarjeta</span>

        // .map
        // .reduce
        // .filter

        datos.map((elemento) => {
          return (
          <div>
            <span>{elemento.nombre}</span>
            <img src={elemento.img} alt="" />
            <span>{elemento.desc}</span>
          </div>
          )
        })
      }
    </div>
  );
}

export default App;
