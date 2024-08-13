import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import Navbar from '../Navbar/Navbar';
import Reaction from './Reaction';

const SinglePostPage = () => {
    const {postId} = useParams();

    const posts = useSelector((state) => state.posts);

    const post = posts.find(post => post.id === postId);

    
    if (!post) {
        return <div className='max-w-2xl mx-auto mt-10 p-4 text-center'>
           <h2> No post found with id: {postId}</h2>
            </div>
    }
  return (
    <div>
    <Navbar/>
    
    <div className='max-w-2xl mx-auto mt-10 p-2 text-center'>
        <div className='border border-gray-400 rounded-md p-4 shadow-sm'>
        <h1 className='text-2xl font-bold mb-4'>{post.title}</h1>
        <PostAuthor userId = {post.user} />
        <TimeAgo timestamp={post.date}/>
        <p className='text-gray-700 mb-4'>{post.content}</p>
        <Reaction post={post}/>
        <div className="flex justify-center space-x-4 mt-4">
          <Link to="/" className="w-28 text-center bg-blue-800 hover:bg-blue-600 text-white font-semibold py-2 rounded shadow-md transition duration-300 ease-in-out">
            Back
          </Link>
          <Link to={`/editpost/${post.id}`} className="w-28 text-center bg-blue-800 hover:bg-blue-600 text-white font-semibold py-2 rounded shadow-md transition duration-300 ease-in-out">
            Edit Post
          </Link>
        </div>
            
        </div>
    </div>
    </div>
  
  )
}

export default SinglePostPage