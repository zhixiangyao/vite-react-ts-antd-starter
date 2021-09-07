import { createSlice } from '@reduxjs/toolkit'

import type { ActionCreatorWithPayload } from '@reduxjs/toolkit'

export interface FieldData {
  name: string | number | (string | number)[]
  value?: any
  touched?: boolean
  validating?: boolean
  errors?: string[]
}

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
  registrantFieldList: FieldData[][]
}

const initialState: InitialState = {
  // Data Ripe
  registrantList: [],

  // FieldData Raw
  registrantFieldList: [],
}

export const registrantSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Data Ripe
    addRegistrant: (state, action: { payload: Data }) => {
      state.registrantList.push(action.payload)
    },

    editRegistrant: (state, action: { payload: { index: number; value: Data } }) => {
      state.registrantList[action.payload.index] = action.payload.value
    },

    deleteRegistrant: (state, action: { payload: number }) => {
      state.registrantList.splice(action.payload, 1)
    },

    // FieldData Raw
    addRegistrantField: (state, action: { payload: FieldData[] }) => {
      state.registrantFieldList.push(action.payload)
    },

    editRegistrantField: (state, action: { payload: { index: number; value: FieldData[] } }) => {
      state.registrantFieldList[action.payload.index] = action.payload.value
    },

    deleteRegistrantField: (state, action: { payload: number }) => {
      state.registrantFieldList.splice(action.payload, 1)
    },
  },
})

// Action creators are generated for each case reducer function
export const addRegistrant: ActionCreatorWithPayload<Data, string> =
  registrantSlice.actions.addRegistrant
export const editRegistrant: ActionCreatorWithPayload<{ index: number; value: Data }, string> =
  registrantSlice.actions.editRegistrant
export const deleteRegistrant: ActionCreatorWithPayload<number, string> =
  registrantSlice.actions.deleteRegistrant

export const addRegistrantField: ActionCreatorWithPayload<FieldData[], string> =
  registrantSlice.actions.addRegistrantField
export const editRegistrantField: ActionCreatorWithPayload<
  { index: number; value: FieldData[] },
  string
> = registrantSlice.actions.editRegistrantField
export const deleteRegistrantField: ActionCreatorWithPayload<number, string> =
  registrantSlice.actions.deleteRegistrantField

export default registrantSlice.reducer
