import { configureStore } from "@reduxjs/toolkit";
import postsReducer  from '../Navbar/PostSlice'
import userReducer from '../users/userSlice.js'

const store = configureStore({
    
    reducer: {
        posts: postsReducer,  
        users : userReducer

    }, 

})


export default store;