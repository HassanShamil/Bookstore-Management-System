import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BookFormFields from '../components/BookFormFields';
import { sampleBooks } from '../data/books';

const BookForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);
  const existingBook = sampleBooks.find((b) => b.id === id);

  const [book, setBook] = useState(
    existingBook || { title: '', author: '', genre: '', price: '', stock: '' }
  );

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isEdit ? 'Updating book' : 'Creating book', book);
    navigate('/books');
  };

  return (
    <div className="p-6 pt-20 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{isEdit ? 'Edit Book' : 'Add New Book'}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <BookFormFields book={book} handleChange={handleChange} />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          {isEdit ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
