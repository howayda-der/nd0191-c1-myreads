import React from 'react';
import { Link } from 'react-router-dom';

import BookShelf from '../components/BookShelf';



const Home = ({ books, handleShelfSelect, booksShelves }) => {
  return (
    <div className="app">
        <div className="list-books">
            
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <BookShelf
                books={books}

                handleShelfSelect={handleShelfSelect}
                booksShelves = {booksShelves}

                />
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                    
                </div>
        </div>
    </div>
  );
};

export default Home;
