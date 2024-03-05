import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { log } from 'console'

export type CartItem = {
  id: number
  price: number
  title: string
  quantity: number
}

type CartState = {
  items: CartItem[]
}

type AddToCartPayload = Omit<CartItem, 'quantity'>

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<AddToCartPayload>) {
      console.log(action.payload, 'add')

      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      console.log(itemIndex, 'itemIndex')

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      )

      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1)
      } else {
        state.items[itemIndex].quantity--
      }
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions
