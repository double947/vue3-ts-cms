import coRequest from '../index'
import { IAccount } from './type'

enum LoginApi {
  AccountLogin = '/login'
}

export function accountLogin(account: IAccount) {
  return coRequest.post({
    url: LoginApi.AccountLogin,
    data: account
  })
}
