// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { BoltIcon } from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <div className='bg-gray-500'>
      <nav className='container mx-auto flex justify-between items-center h-16'>
        <div>
          <Link to="/">
          <h4 className='text-3xl font-bold text-blue-700 flex items-center'><BoltIcon className="h-7 w-7 text-blue-700" /><i>DreamBooks</i></h4>
          </Link>
        </div>
        <div className='flex gap-7'>
          <NavLink to='/' className={({isActive}) => (isActive ? 'text-blue-700 text-xl font-semibold' : 'text-white text-xl font-semibold')}>Home</NavLink>
          <NavLink to='/books' className={({isActive}) => (isActive ? 'text-blue-700 text-xl font-semibold' : 'text-white text-xl font-semibold')}>Books</NavLink>
          <NavLink to='/aboutUs' className={({isActive}) => (isActive ? 'text-blue-700 text-xl font-semibold' : 'text-white text-xl font-semibold')}>AboutUs</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;