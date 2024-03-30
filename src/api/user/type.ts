export interface loginFormDT {
  username: String
  password: String
}

interface dataType {
  token: String
}

export interface loginResponseDT {
  code: number
  data: dataType
}

interface userInfo {
  userId: number
  avatar: string
  username: String
  password: String
  desc: String
  roles: String[]
  buttons: String[]
  routes: String[]
  token: String
}

interface userType {
  checkUser: userInfo
}

export interface userInfoReponseDT {
  code: number
  data: userType
}
