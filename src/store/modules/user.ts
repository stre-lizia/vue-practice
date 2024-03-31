import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import type { loginFormDT, loginResponseDT } from '@/api/user/type'
import type { userStateDT } from './types/type'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'

const useUserStore = defineStore('User', {
  state: (): userStateDT => {
    return {
      token: GET_TOKEN(),
    }
  },
  actions: {
    async userLogin(data: loginFormDT) {
      const result: loginResponseDT = await reqLogin(data)
      if (result.code === 200) {
        this.token = result.data.token as string
        SET_TOKEN(result.data.token as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})

export default useUserStore
