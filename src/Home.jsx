import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <>
      <section className="max-w-2xl mx-auto mt-10 p-4">
        <h2 className="text-2xl font-semibold mb-4">Posts</h2>
        {posts.map((post) => (
          <article key={post.id} className="border border-gray-300 rounded-lg p-4 mb-6 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold mb-2">{post.article}</h3>
            <p className="text-sm sm:text-base text-gray-700">{post.content}</p>
          </article>
        ))}
      </section>
    </>
  );
}

export default Home;
