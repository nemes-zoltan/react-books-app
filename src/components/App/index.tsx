import React, { useState, useCallback } from 'react';
import { SearchForm } from './SearchForm';
import { BookList } from './BookList';
import { fetchBooks } from '../../Api';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = useCallback((searchTerm: string) => {
    setLoading(true);
    fetchBooks(searchTerm).then(({ docs }) => {
      setBooks(docs);
      setLoading(false);
    });
    }, []);



  return (
    <div className="App">
      <SearchForm search={search} />

      {loading && 'Loading...'}
      <BookList books={books} />
    </div>
  );
}

export default App;
