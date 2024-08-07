import { configureStore } from "@reduxjs/toolkit"
import { modalSlice } from "./modalSlice"
import { cartSlice } from "./cartSlice"
import { dataSlice } from "./dataSlice"

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    cart: cartSlice.reducer,
    data: dataSlice.reducer,
  },
  devTools: true,
})

export default store
