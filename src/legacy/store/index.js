import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from './games/reducer'
import cartReducer from './cart/reducer'
import filter from './filter/slice'
import hotel from './hotel/slice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    cart: cartReducer,
    filter,
    hotel,
  },
})

export const useAppDispatch = () => useDispatch()
