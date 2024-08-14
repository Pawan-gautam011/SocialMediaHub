import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";


const Navbar = () => {
  const location = useLocation();
  const isPostPage = location.pathname === '/post';

  return (
    <>
      <nav className='sticky top-0 z-50'>
        <ul className='text-3xl text-[#F7F7F8]'>
          <li className='flex flex-col sm:flex-row items-center justify-between p-4 bg-white bg-opacity-20 backdrop-blur-md  border-white/20 shadow-lg'>
            <NavLink className='m-6 sm:mr-auto' to='/'>
              <h1 className='text-3xl sm:text-4xl'>Pa<span className='font-bold text-[#3795BD]'>W</span>an</h1>
            </NavLink>
        
            {!isPostPage  && (
              <NavLink className='m-6 sm:mr-auto inline'>
                <h1 className='text-2xl sm:text-4xl flex items-center'>
                  Start Posting
                  <FaLongArrowAltRight className="mx-5 hidden sm:inline" />
                  <FaLongArrowAltDown className='mx-2 inline-block sm:hidden' />
                </h1>
              </NavLink>
            )}
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
