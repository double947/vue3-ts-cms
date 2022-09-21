import coRequest from '../index'
import type { IAccount, IDataType, ILoginResp } from './type'

enum LoginApi {
  AccountLogin = '/login',
  QueryUserInfo = '/users/', // '/users/1'
  QueryUserMenuTree = `/role/` // 'role/1/menu'
}

/**
 * 用户登录
 * @param  {IAccount} account
 */
export function accountLogin(account: IAccount) {
  return coRequest.post<IDataType<ILoginResp>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

/**
 * 查询用户信息
 * @param  {number} id
 */
export function queryUserInfoById(id: number) {
  return coRequest.get<IDataType>({
    url: LoginApi.QueryUserInfo + id,
    showLoading: false
  })
}

/**
 * 查询用户角色菜单树
 * @param  {number} id
 */
export function queryUserMenuByRoleId(id: number) {
  return coRequest.get<IDataType>({
    url: LoginApi.QueryUserMenuTree + id + '/menu',
    showLoading: false
  })
}
