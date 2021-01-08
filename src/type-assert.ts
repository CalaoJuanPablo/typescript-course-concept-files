export {}
// <tipo>
let username: any
username = 'jcalaop'

// tenemos una cadena
let message: string =
  (<string>username).length > 5
    ? `Welcome ${username}`
    : 'Username is too short'

console.log('Message:', message)

// Sintaxis "as"
username = 'calaojuanpablo'

// tenemos una cadena
message =
  (username as string).length > 5
    ? `Welcome ${username}`
    : 'Username is too short'

console.log('Message:', message)
