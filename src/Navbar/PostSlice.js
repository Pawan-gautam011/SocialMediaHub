import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: "First Post", content: "Hello, this is my first post!" },
    { id: 2, title: "Second Post", content: "I'm enjoying this new social media app!" },
    { id: 3, name: "Third Post", content: "What's up? I'm excited to see what this app brings to the table!" }
]

const postSlice = createSlice({
name: "posts",
initialState,
reducers: {
    postAdded(state,action){

        state.push(action.payload)
    }

}

}) 

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;
