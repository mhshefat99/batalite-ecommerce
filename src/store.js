import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/Cart/cartSlice";

const store = configureStore({
  reducer: {
    // user: userReducer,
    cart: cartSlice,
  },
});

export default store;
