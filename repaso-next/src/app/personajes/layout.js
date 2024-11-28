import React from 'react';
import Navbar from '@/componentes/Navbar';
import Buscador from '@/componentes/Buscador';
import Tarjeta from '@/componentes/styled/Tarjeta';
import './layout.css'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Buscador />
      <div className="personajes-container">
        <Tarjeta />
      </div>
    </>
  );
}

export default Layout;
