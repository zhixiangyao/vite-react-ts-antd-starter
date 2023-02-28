import { configureStore } from '@reduxjs/toolkit'

import { registrantReducer } from './Reducer/registrantReducer'

const store = configureStore({
  reducer: { registrantReducer },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch

export type { RootState, AppDispatch }
export { store }
