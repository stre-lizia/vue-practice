export interface loginFormDT {
  username: string
  password: string
}

interface dataType {
  token?: string
  message?: string
}

export interface loginResponseDT {
  code: number
  data: dataType
}

interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

interface userType {
  checkUser: userInfo
}

export interface userInfoReponseDT {
  code: number
  data: userType
}
