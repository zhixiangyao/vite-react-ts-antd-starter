import type { ActionCreatorWithPayload } from '@reduxjs/toolkit'

export interface RegistrantActions {
  addRegistrant: ActionCreatorWithPayload<Data, string>
  editRegistrant: ActionCreatorWithPayload<{ index: number; value: Data }, string>
  deleteRegistrant: ActionCreatorWithPayload<number, string>
}

export interface WorkInfo {
  date: string
  info: string
  name: string
  rule: string
}

export interface Data {
  accountAddress?: undefined | string
  birthDate?: undefined | string
  cardNo?: undefined | string
  category?: undefined | number
  censusRegister?: undefined | string
  email?: undefined | string
  emergencyContact?: undefined | string
  emergencyContactPhone?: undefined | string
  emergencyContactRelationship?: undefined | string
  graduationDate?: undefined | string
  graduationSchool?: undefined | string
  highestEducation?: undefined | string
  id?: undefined | string
  idCard?: undefined | string
  registrationTime?: undefined | string
  major?: undefined | string
  maritalStatus?: number
  name?: undefined | string
  nation?: undefined | string
  oftenAddress?: undefined | string
  phone?: undefined | string
  politicalIdentity?: number
  position?: undefined | string
  providentFundAccount?: undefined | string
  qqID?: undefined | string
  remarks?: undefined | string
  sex?: undefined | number
  WeChatID?: undefined | string
  workList?: WorkInfo[]
}

export interface InitialState {
  registrantList: Data[]
}
