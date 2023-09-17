// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Books.css'
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

const Books = () => {
const {books} = useLoaderData();
  return (
    <div className='container mx-auto pt-5'>
      <span className='text-slate-300 text-4xl font-bold text-center flex justify-center'>Dream Books</span>
      <div className='grid grid-cols-1 md:grid-cols-4 md:gap-10 py-10'>
        {
          books.map((book) => <Book
          key={book.isbn13}
          book={book}
          ></Book>)
        }
      </div>
    </div>
  );
};

export default Books;