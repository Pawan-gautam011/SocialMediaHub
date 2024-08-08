import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

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
    <div className='max-w-2xl mx-auto mt-10 p-4 text-center'>
        <div className='border border-gray-400 rounded-md p-4 shadow-sm'>
        <h1 className='text-2xl font-bold mb-4'>{post.title}</h1>
        <p className='text-gray-700 mb-4'>{post.content}</p>
        <Link to='/' className=' bg-blue-800 hover:bg-blue-600 text-white p-2 rounded w-full'>
                    Back
                </Link>
        <Link to={`/editpost/${post.id}`} className='m-10    bg-blue-800 hover:bg-blue-600 text-white p-2 rounded w-full'>
                    Edit Post
                </Link>
        
    </div>
    </div>
  )
}

export default SinglePostPage