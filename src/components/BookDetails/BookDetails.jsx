// eslint-disable-next-line no-unused-vars
import React from 'react';
import './BookDetails.css';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
  const bookDetails = useLoaderData();
  const {image,desc,publisher,authors,year,title,price,rating} = bookDetails;
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
      <div className='flex justify-center'>
        <img className='w-96 h-96' src={image}></img>
      </div>
      <div></div>
    </div>
    </div>
  );
};

export default BookDetails;