
// let num = 20 

// while (num < 10) {
//   console.log(num);
//   num = num + 1
// }

// do {
//   console.log(num);
//   num = num + 1
// } while (num < 10)

let objetos = ['pelota', 'telefono', 'tenedor', 'moneda', 'disco', 'pluma'] 

// for (let i = 0 ; i < objetos.length; i++ ) {
//   console.log(objetos[i])
// }

// haz un ciclo que empiece en -1000 y termine en 2000 pero que avance de dos en dos 

// un ciclo que muestre los numeros pares del 0 al 100

// 'anita lava la tina'

// un ciclo que te diga si una palabra o frase es un palindromo

let palabra = 'anita lava la tina'.replace(/ /g, "")
let esPalindromo = true

for (let i = 0; i< palabra.length; i++) {
  if (palabra[i] != palabra[palabra.length - i - 1]) {
    esPalindromo = false
  } 
}

if (esPalindromo === true) {
  console.log('es palindromo');
} else {
  console.log('no es palindromo');
}

// for( let i = 3; i >= 0; i--){
//   console.log(palabra[i]);
// }