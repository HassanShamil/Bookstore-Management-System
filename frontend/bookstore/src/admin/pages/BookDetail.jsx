import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getBookById, deleteBook } from '../../services/bookService';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBookById(id)
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Book not found or failed to load.');
        setLoading(false);
      });
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await deleteBook(id);
        navigate('/books');
      } catch (err) {
        alert('Failed to delete the book.');
      }
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="p-6 pt-20 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{book.title}</h1>

      <div className="w-full h-48 bg-blue-100 rounded mb-4 flex items-center justify-center overflow-hidden">
        {book.cover ? (
          <img
            src={book.cover}
            alt={book.title}
            className="h-full w-auto object-contain"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.style.display = 'none'; 
            }}
          />
        ) : (
          <span className="text-4xl text-blue-500">📘</span>
        )}
      </div>

      <p className="text-gray-700 mb-1"><strong>Author:</strong> {book.author?.fullName || `${book.author?.firstName} ${book.author?.lastName}`}</p>
      <p className="text-gray-700 mb-1"><strong>Genre:</strong> {book.genre}</p>
      <p className="text-gray-700 mb-1"><strong>Year:</strong> {book.year}</p>
      <p className="text-gray-700 mb-1"><strong>Price:</strong> ${book.price}</p>
      <p className="text-gray-700 mb-1"><strong>Stock:</strong> {book.stockQuantity}</p>

      <div className="flex gap-4 mt-6">
        <Link
          to={`/books/${id}/edit`}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
        <Link
          to="/books"
          className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back to List
        </Link>
      </div>
    </div>
  );
};

export default BookDetail;
