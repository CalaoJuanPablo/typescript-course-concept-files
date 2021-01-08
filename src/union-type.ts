export {}
// Union

// id de usuario numérico o string
type IdUser = number | string
type Username = string

let idUser: IdUser

idUser = 10
idUser = '10'

// Buscar un usuario dado un id

function getUserNameById(id: IdUser): Username {
  // Lógica para encontrar el usuario
  return 'username'
}

// Tipos literales
// Square sizes for photos

type SquareSize = '100x100' | '500x500' | '1000x1000'

let smallPicture: SquareSize = '100x100'
let mediumPicture: SquareSize = '500x500'
let largePicture: SquareSize = '1000x1000'
