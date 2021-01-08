// Void

// Explísito
interface IUser {
  id: string
  username: string
  firstName: string
}

function showInfo(user: IUser): void {
  console.log('User info:', user.id, user.username, user.firstName)
}

// Implícito
function showUserInfoFormatted(user: IUser) {
  console.log(`
    User info:
    - User Id: ${user.id}
    - Username: ${user.username}
    - User First Name: ${user.firstName}
  `)
}

// Void como tipo de dato de una variable

let unusable: void

unusable = null
unusable = undefined
