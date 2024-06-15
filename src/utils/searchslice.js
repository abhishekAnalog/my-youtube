import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{},
    reducers:{
        searchCaches:(state,action)=>{
            state = Object.assign(state,action.payload);
        }
    }
})

export const {searchCaches} = searchSlice.actions
export default searchSlice.reducer;