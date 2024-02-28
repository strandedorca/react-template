import { createSlice } from "@reduxjs/toolkit";
import { Customer } from "../types";

const initialState: Customer[] = [];

const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        
    }
})

export const {  } = customerSlice.actions
export default customerSlice.reducer;