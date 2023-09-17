// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Home.css';
import Lottie from "lottie-react";
import Reading from "../../assets/reading.json";

const Home = () => {
  return (
    <div>
      <div className='grid grid-cols-1 gap-2 md:grid-cols-2 container mx-auto md:items-center md:py-10'>
      <div>
        <span className='text-blue-800 bg-gray-500 font-bold px-3 py-1 rounded-2xl'>ON SALE</span>
        <p className='text-slate-300 text-5xl font-normal my-2'>A reader <br></br>lives a thousand<br></br><span className='text-blue-800'>lives before he dies</span></p>
        <p className='text-slate-300 text-xl'>Books are uniquely portable magic. Books server to show a<br></br>man that those original thoughts of his are not very new after<br></br>all.The man who does not read good books is no better than<br></br>the man who can not.</p>
        <div className='mt-5 flex gap-3'>
          <span className='bg-blue-800 text-gray-500 py-3 px-5 font-bold rounded-md hover:bg-slate-500 hover:text-blue-800 duration-300'>Visit Store</span>
          <span className='border-2 border-gray-500 text-blue-500 py-3 px-5 font-bold rounded-md hover:bg-blue-500 hover:text-gray-400 hover:border-blue-500 duration-300'>Visit Store</span>
        </div>
      </div>
      <div className='overflow-hidden'>
        <Lottie animationData={Reading} loop={true} />
      </div>
    </div>
    </div>
  );
};

export default Home;