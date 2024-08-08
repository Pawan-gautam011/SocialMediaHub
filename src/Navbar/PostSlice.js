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
    },

    postUpdate(state,action){
        
        const {id,title,content} = action.payload;
        const existingPost = state.find((post) =>
        post.id === id)
        if(existingPost){
            existingPost.content = content;
            existingPost.title = title;

        }

    }
},

});

export const { postAdded, postUpdate } = postSlice.actions;

export default postSlice.reducer;

