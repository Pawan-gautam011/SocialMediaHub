import { configureStore } from "@reduxjs/toolkit";
import postsReducer  from '../Navbar/PostSlice'

const store = configureStore({
    
    reducer: {
        posts: postsReducer,  

    }, // add your reducers here

})


export default store;