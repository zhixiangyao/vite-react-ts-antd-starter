import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux'

import type { AppDispatch, RootState } from '/@/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = () => useDispatch<AppDispatch>()

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { useAppDispatch, useAppSelector }
