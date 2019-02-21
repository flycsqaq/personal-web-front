export class User {
  username: string
  password: string
}

export class User_SAVE extends User {
  jwtToken: string
}