import React from 'react';

import Book from './Book';

const BookShelf = ({ books, handleShelfSelect , booksShelves }) => {

    return (
      <div className="list-books-content">
        <div>
          {
            booksShelves.map((shelf)=> (
                <div key={shelf.key} className="bookshelf">
                <h2 className="bookshelf-title">{shelf.value}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        books.filter(book => book.shelf === shelf.key).map((book) => (
                            <li key={book.id}>
                            <Book book={book} handleShelfSelect={handleShelfSelect} />
                            </li>
                        ))
                    }
                    </ol>
                </div>
                </div>
            ))
          }
        </div>
      </div>
    );
};
  



export default BookShelf;




