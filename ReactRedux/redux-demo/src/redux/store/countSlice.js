import { createSlice } from "@reduxjs/toolkit";  

const countSlice = createSlice({  
    name: "Counter",  
    initialState: { count: 0 },  
    reducers: {  
        increase: (state) => {  
            state.count = state.count + 1;  
        },  
        decrease: (state) => {  
            state.count = state.count - 1;  
        },  
    },  
});

export const { increase, decrease } = countSlice.actions;  
export const countReducer = countSlice.reducer;