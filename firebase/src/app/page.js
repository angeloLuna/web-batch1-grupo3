'use client'
import Image from "next/image";
// import axios from "axios";
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig";
import { useState } from 'react'

export default function Home() {

  const [nombre, setNombre] = useState('')

  const handleChangeName = (e) => {
    console.log(e.target.value)
    setNombre(e.target.value)
  }

  const crearUsuario = async () => {
    try {
      const docRef = await addDoc(collection(db, "services"), {
        inicio: 'timestamp',
        lugar: 'id233',
        vehiculo: 'id155327',
        final: '',
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }



  // axios.get('https://pokeapi.co/api/v2/pokemon/ditto')

  // console.log("desde el componente", axios.get('https://pokeapi.co/api/v2/pokemon/ditto'))


  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
  //     const jsondata = await response.json();
  //     console.log("data", jsondata)
  //   } catch (error) {
  //     console.log("Error Fetching data ", error);
  //   }
  //   axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  //     .then(function (response) {
  //       console.log("AXIOS",response.data);
  //     }).catch(error => {
  //       console.log(error)
  //     }) 
  // }

  // fetchData()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={crearUsuario}>
        Crear usuario
      </button>
      <input type="text" id="userName" onChange={handleChangeName} />
    </div>
  );
}
