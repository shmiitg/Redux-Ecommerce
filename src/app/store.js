import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../feature/cartSlice";
import productSlice from "../feature/productSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice,
    },
});

export default store;
