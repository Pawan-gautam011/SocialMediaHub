import React, { useState, useEffect } from 'react';
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

    const users = useSelector((state) => state.users);
    const [userId, setUserId] = useState(post?.user);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setContent(post.content);
        }
    }, [post]);

    const userOptions = users.map((user) => (
        <option key={user.id} value={user.id} className="text-black">
            {user.name}
        </option>
    ));

    const onAuthorChanged = (e) => {
        setUserId(e.target.value);
    };

    const canSave = Boolean(title) && Boolean(userId) && Boolean(content);

    const onUpdatePost = (e) => {
        e.preventDefault();

        if (canSave) {
            dispatch(
                postUpdate({
                    id: postId,
                    title,
                    content,
                    user: userId,
                    date: new Date().toISOString(),
                })
            );
            navigate(`/posts/${postId}`);
            Swal.fire({
                title: 'Updated!',
                text: 'Post Updated successfully!',
                icon: 'success',
            });
        }
    };

    return (
        <div>
            <Navbar />
            <h1 className="text-center lg:text-2xl font-bold m-5 text-[#F7F7F8]">Edit Your Post</h1>
            <div className="flex justify-center">
            <div className="relative bg-opacity-30 backdrop-blur-md border border-gray-300  rounded-lg p-5 w-full max-w-lg bg-[#4E31AA] bg-white/10 border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">

                    <form className="flex flex-col space-y-5" onSubmit={onUpdatePost}>
                        <div>
                            <label htmlFor="postTitle" className="block mb-2 text-lg font-medium text-[#F7F7F8]">
                                Post Title
                            </label>
                            <input
                                type="text"
                                name="postTitle"
                                placeholder="Enter Post Title"
                                id="postTitle"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                className="w-full p-3 border text-[#000000] border-gray-300 rounded-md bg-opacity-70 outline-none  bg-gray-300"
                            />
                        </div>

                        
                        <div className="p-2">
                            <label htmlFor="postAuthor" className="text-lg font-medium text-[#F7F7F8]">
                                Author:
                            </label>
                            <select
                                name="postAuthor"
                                id="postAuthor"
                                value={userId}
                                onChange={onAuthorChanged}
                                className="w-full p-3 border text-[#000000] border-gray-300 bg-gray-300 rounded-md bg-opacity-70 outline-none cursor-pointer"
                            >
                                {userOptions}
                            </select>
                        </div>


                        <div>
                            <label htmlFor="postContent" className="block mb-2 text-lg font-medium text-[#F7F7F8]">
                                Post Content
                            </label>
                            <textarea
                                name="postContent"
                                id="postContent"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Your Message"
                                required
                                className="w-full p-3 border text-gray border-gray-300 bg-gray-300 outline-none rounded-xl bg-opacity-70 resize-none text-black"
                            ></textarea>
                        </div>


                       
                        <button
                            type="submit"
                            className="w-full py-3 bg-green-600 text-[#F7F7F8] rounded-md hover:bg-green-500 transition-all outline-none "
                            disabled={!canSave}
                        >
                            Update Post
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditPostForm;
