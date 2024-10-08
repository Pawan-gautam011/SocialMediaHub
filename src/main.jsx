import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home.jsx'
import store from './Redux/Store.js'
import { Provider } from'react-redux'
import Navbar from './Navbar/Navbar.jsx'
import Post from './Navbar/Post.jsx'
import SinglePostPage from './Components/SinglePostPage.jsx'
import EditPostForm from './Components/EditPostForm.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="/posts/:postId" element={<SinglePostPage/>} />
        <Route path="/editpost/:postId" element={<EditPostForm/>} />
      </Routes>
    </BrowserRouter>
    
        </Provider>
  </React.StrictMode>,
)
