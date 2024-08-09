import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", title: "First Post", content: "Hello, this is my first post!", user:"1"},
    { id: "2", title: "Second Post", content: "I'm enjoying this new social media app!",user:"2" },
]

const postSlice = createSlice({
name: "posts",
initialState,
reducers: {
    postAdded(state,action){

        state.push(action.payload);
    },

    postUpdate(state,action){
        
        const {id,title,content,user} = action.payload;
        const existingPost = state.find((post) =>
        post.id === id)
        if(existingPost){
            existingPost.content = content;
            existingPost.title = title;
            existingPost.user =  user;

        }

    }
},

});

export const { postAdded, postUpdate } = postSlice.actions;

export default postSlice.reducer;

