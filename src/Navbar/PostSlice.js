import { createSlice } from "@reduxjs/toolkit";
import { sub } from 'date-fns';


const initialState = [
    { id: "1", title: "First Post", content: "Hello, this is my first post!", user:"1",date:sub(new Date(),{minutes: 10}).toISOString(),
    reactions:{
        like: 0,
        dislike: 0,
        love: 0,
        haha: 0,
        wow: 0,
        sad: 0,
        angry:0
    },},
    {id: "2", title: "Second Post", content: "I'm enjoying this new social media app!",user:"2",date:sub(new Date(),{minutes: 5}).toISOString(),
    reactions:{
        like: 0,
        dislike: 0,
        love: 0,
        haha: 0,
        wow: 0,
        sad: 0,
        angry:0
    },},
];

const postSlice = createSlice({
name: "posts",
initialState,
reducers: {
    postAdded(state,action){

        state.push(action.payload);
    },

    postUpdate(state,action){
        
        const {id,title,content,user,date} = action.payload;
        const existingPost = state.find((post) =>
        post.id === id)
        if(existingPost){
            existingPost.content = content;
            existingPost.title = title;
            existingPost.user =  user;
            existingPost.date =  date;

        }
    },

    reactionAdded(state,action){
        const {postId, reaction} = action.payload;
        const existingPost = state.find((post) =>
        post.id === postId)
        if(existingPost){
            existingPost.reactions[reaction]++;
        }
    }

},

});

export const { postAdded, postUpdate,reactionAdded } = postSlice.actions;

export default postSlice.reducer;

