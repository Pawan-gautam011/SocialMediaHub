import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { postAdded } from './PostSlice';
import { nanoid } from '@reduxjs/toolkit';

const Post = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const savedTitle = localStorage.getItem('postTitle');
        const savedContent = localStorage.getItem('postContent');
        if (savedTitle) {
            console.log(`Loaded title from localStorage: ${savedTitle}`);
            setTitle(savedTitle);
        }
        if (savedContent) {
            console.log(`Loaded content from localStorage: ${savedContent}`);
            setContent(savedContent);
        }
    }, []);

    const onSavePost = () => {
        if (title && content) {
            const newPost = {
                id: nanoid(),
                title,
                content,
                createdAt: new Date().toISOString(),
            };

            // Dispatch the action to add the post to Redux
            dispatch(postAdded(newPost));

            // Save the new post in localStorage
            localStorage.setItem('post', JSON.stringify(newPost));

            // Clear the input fields
            setTitle("");
            setContent("");

            // Show a success message
            Swal.fire({
                title: "Posted!",
                text: "Posted successfully!",
                icon: "success"
            });

            console.log('Saving post:', newPost);
        }
    };

    return (
        <>
            <Navbar />
            <h1 className='text-center lg:text-2xl font-bold m-10'>Create Your Post</h1>
            <div className=''>
                <div className='flex justify-center'>
                    <div className='relative bg-white bg-opacity-30 backdrop-blur-md border border-gray-300 shadow-lg rounded-lg p-5 w-full max-w-lg'>
                        <form className='flex flex-col space-y-5' onSubmit={(e) => { e.preventDefault(); onSavePost(); }}>
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
                                className='w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-500 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                            >
                                Save Post
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;
