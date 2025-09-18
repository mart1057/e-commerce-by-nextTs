import { CartState, Product } from '@/types/product'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: CartState = {
  items: [
    {
      id: 1,
      name: 'Mock T-Shirt',
      price: 500,
      discount: 350,
      image: '/images/mock-tshirt.png',
      rate: 4.5,
      rate_total: 120,
      quantity: 1
    }
  ]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload
      const existing = state.items.find(
        (item: Product) => item.id === product.id
      )
      if (existing) {
        existing.quantity += product.quantity
      } else {
        state.items.push(product)
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
