import { sampleBooks } from '../data/books';
import BookCard from '../components/BookCard';
import { Link } from 'react-router-dom';

const BookList = () => {
  return (
    <div className="p-6 pt-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Books</h1>
        <Link to="/books/new" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Book
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sampleBooks.map((book) => (
          <Link key={book.id} to={`/books/${book.id}`}>
            <BookCard book={book} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookList;