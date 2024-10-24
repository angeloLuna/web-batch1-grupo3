

const fizzbuzz = (numero) => {
  if (numero % 3 === 0 && numero % 5 === 0) {
    console.log('fizbuzz')
  } else if (numero % 3 === 0) {
    console.log('fizz')
  } else if (numero % 5 === 0) {
    console.log('buzz')
  } else {
    console.log(numero)
  }
}

fizzbuzz(6)
fizzbuzz(20)
fizzbuzz(30)
fizzbuzz(8)
