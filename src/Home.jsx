import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PostAuthor from './Components/PostAuthor';

const Home = () => {
  const posts = useSelector((state) => state.posts);
  return (
    <>
      <section className="max-w-2xl m-auto  p-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Posts</h2>
        {posts.map((post) => (
          <article key={post.id} className="border border-gray-300 rounded-lg p-4 mb-10 mt-10 shadow-sm">

            <p className="text-sm sm:text-base text-gray-900 font-bold">Title: {post.title}</p>
            <p className="text-sm sm:text-base text-gray-500 font-bold">Content: {post.content}</p>
            <PostAuthor userId = {post.user} />

            <div className='flex'>
            <div className='m-4 '>
              <Link to={`/posts/${post.id}`} className='inline-block p-3 text-white rounded-md bg-blue-800 hover:bg-blue-600'>View Post</Link>
            </div>
            <div className='m-4 '>
              <Link to={`/editpost/${post.id}`} className='inline-block p-3 text-white rounded-md bg-blue-800 hover:bg-blue-600'>Edit Post</Link>
            </div>
            </div>
          </article>
        ))}



      </section>
    </>
  );
}

export default Home;
