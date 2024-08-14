import { createSlice } from "@reduxjs/toolkit";
import { sub } from 'date-fns';
import { useEffect } from "react";
import { useSelector } from "react-redux";


const loadState = () => {
    try {
        const postData = localStorage.getItem('posts');
        return postData ? JSON.parse(postData) : undefined;
    } catch (e) {
        console.log("Error loading", e);
        return undefined;
    }
}

const initialState = loadState() || [
    { id: "1", title: "Internship", content: "Is it really hard to find Internship?", user: "1", date: sub(new Date(), { minutes: 10 }).toISOString(), reactions: { like: 0, dislike: 0, love: 0, haha: 0, wow: 0, sad: 0, angry: 0 }, },
    { id: "2", title: "Test Post", content: "I'm enjoying this new social media app!", user: "2", date: sub(new Date(), { minutes: 5 }).toISOString(), reactions: { like: 0, dislike: 0, love: 0, haha: 0, wow: 0, sad: 0, angry: 0 }, },
];

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload);
        },

        postUpdate(state, action) {
            const { id, title, content, user, date } = action.payload;
            const existingPost = state.find((post) => post.id === id);
            if (existingPost) {
                existingPost.content = content;
                existingPost.title = title;
                existingPost.user = user;
                existingPost.date = date;
            }
        },

        postDeleted(state, action) {
            const index = state.findIndex(post => post.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },

        reactionAdded(state, action) {
            const { postId, reaction } = action.payload;
            const existingPost = state.find((post) => post.id === postId);
            if (existingPost) {
                existingPost.reactions[reaction]++;
            }
        },
    },
});

export const { postAdded, postUpdate, reactionAdded, postDeleted } = postSlice.actions;
export default postSlice.reducer;

// Save state to localStorage whenever it changes
export const useSaveState = () => {
    const posts = useSelector((state) => state.posts);

    useEffect(() => {
        try {
            const postData = JSON.stringify(posts);
            localStorage.setItem('posts', postData);
        } catch (e) {
            console.log("Could not save state to LocalStorage", e);
        }
    }, [posts]);
};
