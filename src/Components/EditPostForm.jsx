import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { postUpdate } from '../Navbar/PostSlice';
import Navbar from '../Navbar/Navbar';

const EditPostForm = () => {
    const { postId } = useParams();
    const posts = useSelector((state) => state.posts);
    const post = posts.find((post) => post.id === postId);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userId, setUserId] = useState(post.user);
    const users = useSelector((state) => state.users);

    const userOptions = users.map((user) => (
        <option key= {user.id} value={user.id} className="text-black">{user.name}</option>
    ));

    const user = users.find((user) => user.id === userId)

    const onAuthorChanged = (e) => {
        setUserId(e.target.value);
    };


    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setContent(post.content);
        }
    }, [post]);

    const onUpdatePost = (e) => {
        e.preventDefault(); // Prevent the default form submission

        if (title && content) {
            dispatch(postUpdate({
                id: postId,
                title,
                content,
                user: userId
            }));
            navigate(`/posts/${postId}`);
            Swal.fire({
                title: "Updated!",
                text: "Post Updated successfully!",
                icon: "success"
            });
        }
    };

    return (
        <div>
            <Navbar/>
            <h1 className='text-center lg:text-2xl font-bold m-10'>Edit Your Post</h1>
            <div className='flex justify-center'>
                <div className='relative bg-white bg-opacity-30 backdrop-blur-md border border-gray-300 shadow-lg rounded-lg p-5 w-full max-w-lg'>
                    <form className='flex flex-col space-y-5' onSubmit={onUpdatePost}>
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
                        <div className='p-2'>
                                <label htmlFor="postAuthor" className="  text-lg font-medium">Author:</label>
                                <select
                                    name="postAuthor"
                                    id="postAuthor"
                                    value={userId}
                                    onChange={onAuthorChanged}
                                    className="w-full p-3 border text-black border-gray-300 rounded-md bg-white bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value={user.id} className="text-gray-500">{user.name}</option>
                                    {userOptions}
                                </select>
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
                                className='w-full p-3 border text-gray border-gray-300 rounded-md bg-white bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
                            ></textarea>
                        </div>
                        <button
                            type='submit'
                            className='w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-500 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                        >
                            Update Post
                        </button>
                    </form>
                </div>
            </div>
    
        </div>
        
    );
}

export default EditPostForm;
