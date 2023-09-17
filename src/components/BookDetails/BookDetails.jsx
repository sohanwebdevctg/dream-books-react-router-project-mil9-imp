// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './BookDetails.css';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
  const bookDetails = useLoaderData();
  console.log(bookDetails)
  const {image,desc,publisher,authors,year,title,price,rating} = bookDetails;

  const [showData, setShowData] = useState(false);


  return (
    <div className='p-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 p-10 border-2 border-solid border-blue-800'>
      <div className='border-2 border-solid border-blue-800 bg-gray-500'>
        <img className='image w-auto h-auto' src={image}></img>
      </div>
      <div className=' bg-blue-800 flex items-center justify-center'>
        <div className='p-10'>
          <span className='text-base font-semibold bg-gray-500 p-2 rounded-2xl text-slate-200'>BRAND NEW</span>
          <h5 className='text-4xl font-bold my-3 text-yellow-400'>{title ? title : 'No Data'}</h5>
          <p className='text-lg text-white font-bold my-1'>Authors : <span className='text-gray-400'>{authors ? authors : 'No-Data'}</span></p>
          <p className='text-lg text-white font-bold my-1'>Publisher : <span className='text-gray-400'>{publisher ? publisher : 'No-Data'}</span></p>
          <p className='text-lg text-white font-bold my-1'>Year : <span className='text-gray-400'>{year ? year : 'No-Data'}</span></p>
          <p className='text-lg text-white font-bold my-1'>Rating : <span className='text-gray-400'>{rating ? rating : '00'}</span></p>
          <p className='text-yellow-400'>
            
              {
              desc.slice(0, showData ? 420 : 100)
              }&nbsp;
            {
              showData ? (<span className='text-gray-400 font-bold' onClick={()=> setShowData(false)}>...Read Less</span>) : (<span className='text-gray-400 font-bold' onClick={()=> setShowData(true)}>Read More...</span>)
            }
          </p>
          <div>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BookDetails;