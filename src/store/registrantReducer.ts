import { createSlice } from '@reduxjs/toolkit'
import { getLocalStorage, setLocalStorage } from '/@/utils'
import type { ActionCreatorWithPayload } from '@reduxjs/toolkit'

export interface Data {
  accountAddress: undefined | string
  birthDate: undefined | string
  cardNo: undefined | string
  category: undefined | number
  censusEegister: undefined | string
  email: undefined | string
  emergencyContact: undefined | string
  emergencyContactPhone: undefined | string
  emergencyContactRelationship: undefined | string
  graduationDate: undefined | string
  graduationSchool: undefined | string
  highestEducation: undefined | string
  id: undefined | string
  idCard: undefined | string
  registrationTime: undefined | string
  major: undefined | string
  maritalStatus: number
  name: undefined | string
  nation: undefined | string
  oftenAddress: undefined | string
  phone: undefined | string
  politicalIdentity: number
  position: undefined | string
  providentFundAccount: undefined | string
  qqID: undefined | string
  remarks: undefined | string
  sex: undefined | number
  wechatID: undefined | string
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
    addRegistrant: (state, action) => {
      state.registrantList.push(action.payload)
      setLocalStorage('registrantList', state.registrantList)
    },

    deleteRegistrant: (state, action) => {
      state.registrantList.splice(action.payload, 1)
      setLocalStorage('registrantList', state.registrantList)
    },
  },
})

// Action creators are generated for each case reducer function
export const addRegistrant: ActionCreatorWithPayload<Data, string> =
  registrantSlice.actions.addRegistrant
export const deleteRegistrant: ActionCreatorWithPayload<number, string> =
  registrantSlice.actions.deleteRegistrant

export default registrantSlice.reducer
