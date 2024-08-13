import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PostAuthor from './Components/PostAuthor';
import TimeAgo from './Components/TimeAgo';
import Reaction from './Components/Reaction';

const Home = () => {
  const posts = useSelector((state) => state.posts);
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <section className="max-w-2xl m-auto  p-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Posts</h2>
        {orderedPosts.map((post) => (
          <article key={post.id} className="border border-gray-300 rounded-lg p-4 mb-10 mt-10 shadow-sm">

            <p className="text-sm sm:text-base text-gray-900 font-bold">Title: {post.title}</p>
            <p className="text-sm sm:text-base text-gray-500 font-bold mt-3">Content: {post.content}</p>
            <PostAuthor userId = {post.user} />

            <TimeAgo timestamp={post.date} />
            
            <Reaction post={post}/>

            <div className='flex mt-6'>
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
