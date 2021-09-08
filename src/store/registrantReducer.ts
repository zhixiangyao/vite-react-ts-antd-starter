import { createSlice } from '@reduxjs/toolkit'

import { getLocalStorage, setLocalStorage } from '/@/utils'

import type { ActionCreatorWithPayload } from '@reduxjs/toolkit'

interface WorkInfo {
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
  censusEegister?: undefined | string
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
  wechatID?: undefined | string
  workList?: WorkInfo[]
}

export interface InitialState {
  registrantList: Data[]
}

const initialState: InitialState = {
  registrantList: getLocalStorage('registrantList', true) ?? [],
}

export const registrantSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addRegistrant: (state, action: { payload: Data }) => {
      state.registrantList.push(action.payload)
      setLocalStorage('registrantList', state.registrantList)
    },

    editRegistrant: (state, action: { payload: { index: number; value: Data } }) => {
      state.registrantList[action.payload.index] = action.payload.value
      setLocalStorage('registrantList', state.registrantList)
    },

    deleteRegistrant: (state, action: { payload: number }) => {
      state.registrantList.splice(action.payload, 1)
      setLocalStorage('registrantList', state.registrantList)
    },
  },
})

interface RegistrantActions {
  addRegistrant: ActionCreatorWithPayload<Data, string>
  editRegistrant: ActionCreatorWithPayload<{ index: number; value: Data }, string>
  deleteRegistrant: ActionCreatorWithPayload<number, string>
}

// Action creators are generated for each case reducer function
export const { addRegistrant, editRegistrant, deleteRegistrant }: RegistrantActions =
  registrantSlice.actions

export default registrantSlice.reducer
