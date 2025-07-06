import type { Data, InitialState, RegistrantActions } from '/@/store/Reducer/types'

import { createSlice } from '@reduxjs/toolkit'
import { getLocalStorage, setLocalStorage } from '/@/utils/storage'

const initialState: InitialState = {
  list: getLocalStorage('list', true) ?? [],
}

const registrantSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addRegistrant: (state, action: { payload: Data }) => {
      state.list.push(action.payload)
      setLocalStorage('list', state.list)
    },

    editRegistrant: (state, action: { payload: { index: number, value: Data } }) => {
      state.list[action.payload.index] = action.payload.value
      setLocalStorage('list', state.list)
    },

    deleteRegistrant: (state, action: { payload: number }) => {
      state.list.splice(action.payload, 1)
      setLocalStorage('list', state.list)
    },
  },
})

// Action creators are generated for each case reducer function
const { addRegistrant, editRegistrant, deleteRegistrant }: RegistrantActions
  = registrantSlice.actions

const registrantReducer = registrantSlice.reducer

export { addRegistrant, deleteRegistrant, editRegistrant, registrantReducer }
export type { Data, InitialState }
