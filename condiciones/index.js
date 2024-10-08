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

1 < 2 < 3