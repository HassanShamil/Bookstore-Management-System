import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { getAllBooks } from '../services/bookService';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllBooks()
      .then(setBooks)
      .catch((err) => {
        console.error(err);
        setError('Failed to load books.');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-6 pt-20 text-center text-gray-600">Loading books...</div>;
  if (error) return <div className="p-6 pt-20 text-center text-red-600">{error}</div>;

  return (
    <div className="p-6 pt-20 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900">Books</h1>
        <Link
          to="/books/new"
          className="bg-indigo-600 text-white px-5 py-3 rounded-md shadow-md hover:bg-indigo-700 transition"
        >
          + Add New Book
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <Link key={book.id} to={`/books/${book.id}`} className="group block">
            <BookCard book={book} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookList;
