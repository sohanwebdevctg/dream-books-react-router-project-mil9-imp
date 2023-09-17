// eslint-disable-next-line no-unused-vars
import React from 'react';
import './BookDetails.css';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
  const bookDetails = useLoaderData();
  const {image,desc,publisher,authors,year,title,price,rating} = bookDetails;
  return (
    <div>
      
    </div>
  );
};

export default BookDetails;