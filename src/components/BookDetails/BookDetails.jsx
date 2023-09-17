// eslint-disable-next-line no-unused-vars
import React from 'react';
import './BookDetails.css';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
  const bookDetails = useLoaderData();
  console.log(bookDetails);
  const {image,desc} = bookDetails;
  return (
    <div>
      <h1 className='text-white'>hello world</h1>
    </div>
  );
};

export default BookDetails;