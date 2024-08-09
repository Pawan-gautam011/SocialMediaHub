import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
    id:"1",
    name:"Pawan",
},
    {
    id:"2",
    name:"Test Case",
},
    {
    id:"3",
    name:"Hello World",
},

];

const userSlice = createSlice({

    name:"users",
    initialState,
    reducers:{

    }
})


export default userSlice.reducer;