import React from 'react'

import './Home.css';


export default function Home({ books, searchTerm, setSearchTerm }) {
    const filteredBooks = books.filter((book) => {
        return book.title.toLowerCase().includes(searchTerm.toLowerCase()); // Added return statement
    });

    return (
        <div class="home-container">
            <div className="search-bar">
                <h1 className="title">Book Finder</h1>
                <input
                    type="text"
                    placeholder='Search books'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="books-container">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book) => (
                         <div key={book.id} className="book-card">
                              {/* <div key={book.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}> */}
                            <h2 className="book-title">{book.title}</h2>
                            <p><strong>Author:</strong> {book.author}</p>
                            <p><strong>Genre:</strong> {book.genre}</p>
                            <p><strong>Published Year:</strong> {book.published_year}</p>
                            <p className="book-description">{book.description}</p>
                        </div>
                    ))
                ) : (
                    <p className="no-books">No books found.</p>
                )}
            </div>
        </div>
    );
}










