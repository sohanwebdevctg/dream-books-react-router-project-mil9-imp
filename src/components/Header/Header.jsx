// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-gray-500'>
      <nav className='container mx-auto flex justify-between items-center h-12'>
        <div>
          <h4 className='text-xl font-bold text-blue-700'><i>DreamBooks</i></h4>
        </div>
        <div className='flex gap-7'>
          <NavLink to='/' className={({isActive}) => (isActive ? 'text-blue-700' : 'text-white')}>Home</NavLink>
          <NavLink to='/books' className={({isActive}) => (isActive ? 'text-blue-700' : 'text-white')}>Books</NavLink>
          <NavLink to='/aboutUs' className={({isActive}) => (isActive ? 'text-blue-700' : 'text-white')}>AboutUs</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;