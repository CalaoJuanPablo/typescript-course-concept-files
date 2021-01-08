// Tipo Object

let user: object

user = {}

user = {
  id: 1,
  username: 'jcalaop',
  firstName: 'Juan',
  isPro: true
}

console.log('USER:', user)
// console.log('Username', user.username) /* Error: No existe username en tipo Object */

// Object vs object (Class vs Typescript type)

const myObj = {
  id: 1,
  username: 'jcalaop',
  firstName: 'Juan',
  isPro: true
}
// Para el tsc, este es una instancia de la clase Object de Javascript. Inferencia implícita de tipos

const isInstance = myObj instanceof Object
