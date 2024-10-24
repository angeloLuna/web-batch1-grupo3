console.log('condiciones')

// >
// <
// >=
// <=
// ==
// !=

let edad = 19
let cedula = false

if (edad >= 18) {
  if (cedula == true) {
    console.log('Puedes votar')
  } else {
    console.log('necesitas la cedula para votar')
  }
} else {
  console.log('No puedes votar')
}

// &&

// ||


let personas = 5

if (personas === 1) {
  console.log('Muestra los paquetes personales');
} else if (personas >= 2 && personas <= 3) {
  console.log('muestra los paquetes medianos');
} else {
  console.log('muestra los paquetes familiares');
}

let jugador1 = 'papel'
let jugador2 = 'tijera'


if (jugador1 == 'papel' && jugador2 == 'tijera') {
  console.log('gana jugador2');
}
if (jugador1 == 'papel' && jugador2 == 'papel') {
  console.log('empate');
}
if (jugador1 == 'papel' && jugador2 == 'piedra') {
  console.log('gana jugador1');
}


// 1 papel
// 2 tijera
// 3 piedra

Math.random

if (jugador1 == jugador2) {
  console.log('empate');
}

if (jugador1 == 3 && jugador2 == 2) {
  console.log('gana jugador1');
}
if (jugador1 == 3 && jugador2 == 2) {
  console.log('gana jugador1');
}
if (jugador1 == 3 && jugador2 == 2) {
  console.log('gana jugador1');
} 

let password = 'Perritos11'

if (password.length > 7) {
  console.log('puedes dar en siguiente');
} else  {
  console.log('deshabilita el boton');
}