// Imports ---------------------------------
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],

  // cart: [
  //   {
  //     id: 12,
  //     name: 'Mediterranean',
  //     quantity: 2,
  //     price: 16,
  //     totalPrice: 32,
  //   },
  // ],
};

// Creating the slice :
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
      console.log(action.payload);
    },
    deleteItem(state, action) {
      // payload = id
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = id
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },
    decreaseItemQuantity(state, action) {
      // payload = id
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.price;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

// Exporting actions to be used on useDispatch()
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

// Creating selectors to be used on useSelector();
// useSelector(getCart) -- useSelector passes the store to the getCart(*store*)
const getCart = (store) => store.cart.cart;

// const getItemById = (id) => (store) =>
//   store.cart.cart.find((item) => item.id === id);

const getItemById = (store, id) =>
  store.cart.cart.find((item) => item.id === id);

// const makeGetItemById = (id) => (store) =>
//     store.cart.cart.find((item) => item.id === id);

const getTotalCartQuantity = (store) =>
  store.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

const getTotalCartPrice = (store) =>
  store.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

const getCurrentQuantityById = (store, id) =>
  store.cart.cart.find((item) => item.id === id)?.quantity ?? 0;

// Exporting selectors:
export {
  getCart,
  getItemById,
  getCurrentQuantityById,
  getTotalCartQuantity,
  getTotalCartPrice,
};

// Exporting the reducer:
export default cartSlice.reducer;

// 'reselect'
