// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const backBtn = () => {
    navigate(-1);
  }
  return (
    <div className='flex justify-center items-center h-screen bg-black'>
      <div className='text-center'>
      <h1 className='text-blue-700 text-3xl font-extrabold'>Oops!</h1>
      <p className='text-gray-500 text-4xl font-bold my-2'>Sorry, an unexpected error has occurred.</p>
      <p className='text-slate-100 text-3xl font-extrabold'>
        <i>{error.statusText || error.message}</i>
      </p>
      <span onClick={backBtn} className='bg-blue-800 text-gray-500 py-3 px-5 font-bold rounded-md hover:bg-slate-500 hover:text-blue-800 duration-300 inline-block mt-5'>Previous Page</span>
    </div>
    </div>
  );
};

export default ErrorPage;