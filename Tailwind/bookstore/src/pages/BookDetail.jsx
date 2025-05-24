import { useParams, Link } from 'react-router-dom';
import { sampleBooks } from '../data/books';

const BookDetail = () => {
  const { id } = useParams();
  const book = sampleBooks.find((b) => b.id === id);

  if (!book) return  <div className="flex items-center justify-center h-screen text-red-600 text-lg">Book not found.</div>;


  return (
    <div className="p-6 pt-20 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg max-w-2xl w-full p-6">
        {/* Placeholder image section */}
        <div className="h-48 w-full bg-blue-100 rounded flex items-center justify-center mb-6">
          <span className="text-6xl">📘</span>
        </div>

        <h1 className="text-3xl font-bold mb-4 text-blue-600">{book.title}</h1>

        <div className="space-y-2 text-gray-700">
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Year:</strong> {book.year}</p>
          <p><strong>Genre:</strong> {book.genre}</p>
          <p><strong>Price:</strong> ${book.price}</p>
          <p><strong>Stock:</strong> {book.stock}</p>
        </div>

        <div className="mt-6">
          <Link
            to={`/books/${book.id}/edit`}
            className="inline-block bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
          >
            Edit Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
