import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";
import './estilosCard.css'

const Cards = () => {
  const [result, setResult ] = useState('')
  axios.get('https://pokeapi.co/api/v2/pokemon')
  .then(function (response) {
    // manejar respuesta exitosa
    if (response ) {
      // console.log("from callback",response);
      setResult(response.data.results)
    }
  })



  return (
    <>
    <div className="tarjetas">
      {
        result && result.map((item) => <Card name={item.name} url={item.url} />)
      }
    </div>
    {
      console.log(result)
      
    }
    </>
  )
}

export default Cards