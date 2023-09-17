// eslint-disable-next-line no-unused-vars
import React from 'react';
import './BookDetails.css';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
  const bookDetails = useLoaderData();
  const {image,desc,publisher,authors,year,title,price,rating} = bookDetails;
  return (
    <div className='p-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 p-10 border-2 border-solid border-blue-800'>
      <div className='border-2 border-solid border-blue-800 bg-gray-500'>
        <img className='image w-auto h-auto' src={image}></img>
      </div>
      <div className=' bg-white'>
        <img className='image w-auto h-auto' src={image}></img>
      </div>
    </div>
    </div>
  );
};

export default BookDetails;