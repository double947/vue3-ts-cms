export interface IAccount {
  name: string
  password: string
}
export interface ILoginResp {
  id: number
  name: string
  token: string
}

export interface IDataType<T = any> {
  code: number
  data: T
}
