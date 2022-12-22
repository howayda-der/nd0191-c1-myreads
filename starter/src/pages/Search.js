import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import Book from '../components/Book';
import * as BooksAPI from '../BooksAPI';


const Search = ({ books , handleShelfSelect }) => {
  const [query, setQuery] = useState("");
  const [queryBooksList, setQueryBooksList] = useState([]);

  useEffect(() => {
            const queryTimer = setTimeout(async () => {
            try {
                if (query) {
                  const resultBooks = await BooksAPI.search(query);
                if (resultBooks?.error) {
                    setQueryBooksList([]);
                    
                } else if(resultBooks){


                        resultBooks.forEach((resultBook) => {
                        resultBook.shelf = 'none';
                        books.forEach((book) => {

                            if (resultBook.id === book.id) {
                                resultBook.shelf = book.shelf;
                                }
                            });
                        });
                        setQueryBooksList(resultBooks);
                }
                } else {

                    setQueryBooksList([]);
                }
            } catch (error) {
                setQueryBooksList([]);
            }
    }, 1200);

    return () => {
        clearTimeout(queryTimer);
    };
  }, [query, books]);

  return (

    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="search-books-results">
        <ol className="books-grid">
            {queryBooksList&&queryBooksList?.map((book) => (

                    <Book
                        key={book.id}
                        book={book}
                        handleShelfSelect={handleShelfSelect}
                    />
                ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;


