import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PostAuthor from './Components/PostAuthor';
import TimeAgo from './Components/TimeAgo';
import Reaction from './Components/Reaction';
import { MdDelete } from "react-icons/md";
import { postDeleted } from './Navbar/PostSlice';
import Swal from 'sweetalert2';

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const handleDelete = (postId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(postDeleted(postId));
        Swal.fire(
          'Deleted!',
          'Your post has been deleted.',
          'success'
        );
      }
    });
  };

  return (
    <>
      <section className="max-w-2xl m-auto p-4">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-4 text-center text-[#F7F7F8]">Posts</h2>
        {orderedPosts.map((post) => (
          <article key={post.id} className="border border-gray-300 rounded-lg p-4 mb-10 mt-10 backdrop-blur-md bg-[#4E31AA] bg-white/10 border-white/20 shadow-[0_40px_30px_rgba(0,0,0,0.1)]">
            <p className="text-sm sm:text-base text-[#F7F7F8] font-bold">Title : {post.title}</p>
            <p className="text-sm sm:text-base text-gray-300 font-bold mt-3">Content : {post.content}</p>
            <PostAuthor userId={post.user} />
            <TimeAgo timestamp={post.date} />
            <Reaction post={post} />
            <div className='flex flex-wrap sm:flex-row mt-6 items-center  '>
              <div className='mx-auto sm:m-4'>
                <Link to={`/posts/${post.id}`} className='inline-block p-3 text-white rounded-md bg-blue-800 hover:bg-blue-600 text-center'>
                  View Post
                </Link>
              </div>
              <div className='m-2 sm:m-4'>
                <Link to={`/editpost/${post.id}`} className='inline-block p-3 text-white rounded-md bg-blue-800 hover:bg-blue-600 text-center'>
                  Edit Post
                </Link>
              </div>
              <div className='m-2 sm:m-4'>
                <MdDelete className='h-10 w-8 sm:h-10 sm:w-10 cursor-pointer text-red hover:text-red-600 mx-[117px] sm:mx-0' onClick={() => handleDelete(post.id)} />
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default Home;
