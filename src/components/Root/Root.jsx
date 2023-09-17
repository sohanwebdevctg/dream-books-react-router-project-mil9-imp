// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Root.css';
import { Outlet } from 'react-router-dom';
import Header from './../Header/Header';
import Footer from '../Footer/Footer';

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className='bg-black'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;