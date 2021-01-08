// Tipo explícito
let idUser: any
idUser = 1 /* number */
idUser = '1' /* string */

// Tipo inferido
let otherId
otherId = 1
otherId = '1'

let surprise: any = 'hello typescript'
//
let rest = surprise.substring('6')
