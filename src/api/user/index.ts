import request from '@/utils/request'

import type { loginFormDT, loginResponseDT, userInfoReponseDT } from './type'

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
  LOGOUT_URL = '/user/logout',
}

export const reqLogin = (data: loginFormDT) =>
  request.post<any, loginResponseDT>(API.LOGIN_URL, data)
export const reqUserInfo = () =>
  request.get<any, userInfoReponseDT>(API.USERINFO_URL)
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)
