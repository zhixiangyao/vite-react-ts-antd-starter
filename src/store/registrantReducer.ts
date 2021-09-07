import { createSlice } from '@reduxjs/toolkit'
import { getLocalStorage, setLocalStorage } from '/@/utils'
import type { ActionCreatorWithPayload } from '@reduxjs/toolkit'

export interface Data {
  key: string
  name: string
  registrationTime: string
  address: string
  tags: string[]
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
    addRegistrant: (state) => {
      state.registrantList.push({
        key: String(Math.floor(Math.random() * 10000)),
        name: 'John Brown',
        registrationTime: '2020-09-06 14:00',
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      })
      setLocalStorage('registrantList', state.registrantList)
    },

    deleteRegistrant: (state, action) => {
      state.registrantList.splice(action.payload, 1)
      setLocalStorage('registrantList', state.registrantList)
    },
  },
})

// Action creators are generated for each case reducer function
export const addRegistrant = registrantSlice.actions.addRegistrant
export const deleteRegistrant: ActionCreatorWithPayload<number, string> =
  registrantSlice.actions.deleteRegistrant

export default registrantSlice.reducer
