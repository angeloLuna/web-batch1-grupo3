const boton = document.querySelector('#boton')
const texto = document.querySelector('#texto')
let contador = 0

console.log(texto)
boton.addEventListener('click', () => {
  contador += 1
  console.log('click :D', contador);
  texto.innerHTML = contador
})


// function suma(a, b) {
//   console.log(a + b)
// }

// suma(10, 20)
// suma(1, 1)
// suma(1000, 23)

const resta = (a, b) => {
  return a - b;
}

// resta(10, 8)
// resta(1, 1)


// console.log(resta(100, resta(10, 5)));





// console.log(boton)

// const persona = {
//   nombre: 'Angelo',
//   apellido: 'Luna',
//   direccion: {
//     calle: 'Setubal',
//     numero: '13'
//   },
//   telefono: '5555555555'
// }

// console.log(document)

