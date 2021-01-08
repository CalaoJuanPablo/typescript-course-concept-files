console.log('Hola Platzi con TS')

// Number
// explícito
let phone: number

phone = 1
phone = 583043420098
// phone = 'hola' /* Error */

// inferido
let phoneNumber = 583043420098
phoneNumber = 1234235
// phoneNumber = true /* Error */

let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744

// Boolean
// Tipado explícito
let isPro: boolean
isPro = true
// isPro = 1 /* Error */

// Tipado inferido
let isUserPro = false
isUserPro = true
// isUserPro = 0 /* Error */

// String
let username: string = 'calaojuanpablo'
username = 'jcalaop'

let firsName = 'Juan'
// username = true /* Error */

// Templete string
// backtick

let userInfo: string
userInfo = `
  User Info
  username: ${username}
  firstName: ${firsName + ' Pablo'}
  phone: ${phone}
  isPro: ${isPro}
`
console.log(userInfo)
