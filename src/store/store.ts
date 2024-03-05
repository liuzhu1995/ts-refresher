import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './todos-slice'
import { cartSlice } from './cart-slice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    cart: cartSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
