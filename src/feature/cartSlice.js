import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem(state, action) {
            return { items: state.items.filter((item) => item.id !== action.payload) };
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
