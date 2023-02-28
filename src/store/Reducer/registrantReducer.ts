import { createSlice } from '@reduxjs/toolkit'

import { getLocalStorage, setLocalStorage } from '/@/utils'

import type { InitialState, Data, RegistrantActions } from '/@/store/Reducer/types'

const initialState: InitialState = {
  registrantList: getLocalStorage('registrantList', true) ?? [],
}

const registrantSlice = createSlice({
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

// Action creators are generated for each case reducer function
const { addRegistrant, editRegistrant, deleteRegistrant }: RegistrantActions =
  registrantSlice.actions

const registrantReducer = registrantSlice.reducer

export { addRegistrant, editRegistrant, deleteRegistrant, registrantReducer }
export type { InitialState, Data }
