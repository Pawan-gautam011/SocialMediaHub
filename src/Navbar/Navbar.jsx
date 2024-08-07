import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isPostPage = location.pathname === '/post';

  return (
    <>
      <nav>
        <ul className='text-3xl text-white'>
          <li className='flex flex-col sm:flex-row items-center justify-between bg-slate-800 p-4'>
            <NavLink className='m-6 sm:mr-auto' to='/'>
              <h1 className='text-3xl sm:text-4xl'>Pa<span className='font-bold text-blue-600'>W</span>an</h1>
            </NavLink>
            <NavLink className='m-6 sm:flex-shrink-0' to={isPostPage ? '/' : '/post'}>
              {isPostPage ? 'Back to Home' : 'Post'}
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
