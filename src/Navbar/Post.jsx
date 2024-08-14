import { useState} from 'react';
import Navbar from './Navbar';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './PostSlice';
import { nanoid } from '@reduxjs/toolkit';

const Post = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState("");
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    const userOptions = users.map((user) => (
        <option key={user.id} value={user.id} className="cursor-pointer">{user.name}</option>
    ));

    const onAuthorChanged = (e) => {
        setUserId(e.target.value);
    };

 const canSave = Boolean(title) && Boolean(userId) && Boolean(content);

    const onSavePost = () => {
        if (title && content) {
            const newPost = {
                id: nanoid(),
                title,
                content,
                user: userId,
                date: new Date().toISOString(),
                reactions:{
                    like: 0,
                    dislike: 0,
                    love: 0,
                    haha: 0,
                    wow: 0,
                    sad: 0,
                    angry:0
                },
            };
            dispatch(postAdded(newPost));


            setTitle("");
            setContent("");
            setUserId("");

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
            <h1 className='text-center text-xl sm:text-3xl font-bold m-2 text-[#F7F7F8]'>Create Your Post</h1>
            <div className=''>
                <div className='flex justify-center'>
                    <div className='relative bg-[#4E31AA] bg-opacity-30 backdrop-blur-md border border-gray-300 shadow-lg rounded-lg p-5 w-full max-w-lg'>
                        <form className='flex flex-col space-y-5' onSubmit={(e) => { e.preventDefault(); onSavePost(); }}>
                            <div>
                                <label htmlFor='postTitle' className='block mb-2 text-lg font-medium text-[#F7F7F8]'>Post Title</label>
                                <input
                                    type='text'
                                    name='postTitle'
                                    placeholder='Enter Post Title'
                                    id='postTitle'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                    className='w-full p-3 border text-black border-gray-300 rounded-md bg-white bg-opacity-70 outline-none placeholder-black '
                                />
                            </div>
                            <div className='p-2'>
                                <label htmlFor="postAuthor" className="  text-lg font-medium text-[#F7F7F8] ">Author : </label>
                                <select
                                    name="postAuthor"
                                    id="postAuthor"
                                    value={userId}
                                    onChange={onAuthorChanged}
                                    className="w-full p-3 border text-black border-gray-300 rounded-md bg-white bg-opacity-70 outline-none cursor-pointer "
                                >
                                    <option value="" className="text-[#F7F7F8] cursor-pointer">Select an author</option>
                                    {userOptions}
                                </select>
                            </div>
                            <div>
                                <label htmlFor='postContent' className='block mb-2 text-lg font-medium text-[#F7F7F8]'>Post Content</label>
                                <textarea
                                    name='postContent'
                                    id='postContent'
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder='Your Message'
                                    required
                                    className='w-full p-3 border text-black border-gray-300 rounded-md bg-white bg-opacity-70 outline-none  resize-none placeholder-black'
                                ></textarea>
                            </div>
                            <button
                                type='submit'
                                className='w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-500 transition-all outline-none  focus:ring-opacity-50 cursor-pointer'
                                disabled={!canSave}
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
