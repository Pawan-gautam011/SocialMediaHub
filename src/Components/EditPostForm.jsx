import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import { postUpdate } from '../Navbar/PostSlice';
import { nanoid } from '@reduxjs/toolkit';
import Navbar from '../Navbar/Navbar';

const EditPostForm = () => {

    const {title, setTitle} = useState(post.title)
    const {content, setContent} = useState(post.content)
    
    const {postId} = useParams();
    const posts = useSelector((state)=> state.posts)
    const post = posts.find((post)=> post.id === postId);
    const dispatch = useDispatch()
    const navigate = useNavigate();

  console.log(postId);

  const onUpdatePost= () =>{
    if(title && content) {
      dispatch(postUpdate(
        {
          id:postId,
          title,
          content,
          createdAt: new Date().toISOString()
        }
      ));
      navigate(`/posts/${postId}`);
      setTitle("")
      setContent("")
      Swal.fire({
        title: "Edited!",
        text: "Edited successfully!",
        icon: "success"
      });
    }
    console.log('Saving post:', { title, content });
    setTitle('');
    setContent('');
          

  }

    return (


    <div>
        <h2>Edit Post</h2>

      <Navbar/>
      <h1 className='text-center lg:text-2xl font-bold m-10'>Create Your Post</h1>
      <div className=' '>
        <div className='flex justify-center'>
          <div className='relative bg-white bg-opacity-30 backdrop-blur-md border border-gray-300 shadow-lg rounded-lg p-5 w-full max-w-lg'>
            <form className='flex flex-col space-y-5'>
              <div>
                <label htmlFor='postTitle' className='block mb-2 text-lg font-medium'>Post Title</label>
                <input
                  type='text'
                  name='postTitle'
                  placeholder='Enter Post Title'
                  id='postTitle'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className='w-full p-3 border text-black border-gray-300 rounded-md bg-white bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div>
                <label htmlFor='postContent' className='block mb-2 text-lg font-medium'>Post Content</label>
                <textarea
                  name='postContent'
                  id='postContent'
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder='Your Message'
                  required
                  className='w-full p-3 border text-black border-gray-300 rounded-md bg-white bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
                ></textarea>
              </div>
              <button
                type='submit'
                onClick={onUpdatePost}
                className='w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-500 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
              >
                Update Post
              </button>
            </form>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default EditPostForm