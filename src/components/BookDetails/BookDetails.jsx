// eslint-disable-next-line no-unused-vars
import React from 'react';
import './BookDetails.css';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
  const bookDetails = useLoaderData();
  console.log(bookDetails)
  const {image,desc,publisher,authors,year,title,price,rating} = bookDetails;
  return (
    <div className='p-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 p-10 border-2 border-solid border-blue-800'>
      <div className='border-2 border-solid border-blue-800 bg-gray-500'>
        <img className='image w-auto h-auto' src={image}></img>
      </div>
      <div className=' bg-blue-800 flex items-center justify-center'>
        <div>
          <span className='text-base font-semibold bg-gray-500 p-2 rounded-2xl text-slate-200'>BRAND NEW</span>
          <h5 className='text-4xl font-bold my-3 text-yellow-400'>{title ? title : 'No Data'}</h5>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BookDetails;