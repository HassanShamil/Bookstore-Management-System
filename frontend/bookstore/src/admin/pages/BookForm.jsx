import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BookFormFields from '../components/BookFormFields';
import { getBookById, createBook, updateBook } from '../../services/bookService';

const BookForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [book, setBook] = useState({
    title: '',
    author: {
      firstName: '', 
      lastName: '',  
      biography: '', 
      id: null
    },
    
    year: '',
    price: '',
    stockQuantity: '', 
    isbn: ''
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    if (isEdit) {
      getBookById(id)
        .then((data) => {
          setBook({
            ...data,
            year: data.year.toString(),
            price: data.price.toString(),
            stockQuantity: data.stockQuantity.toString(),
            isbn: data.isbn?.toString(),
            author: {
              ...data.author,
              id: data.author.id || null,
              firstName: data.author.firstName || '',  
              lastName: data.author.lastName || '',    
              biography: data.author.biography || ''   
            }
          });
        })
        .catch(() => setError('Failed to load book.'));
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // ✅ CHANGED: Updated field names to match BookFormFields
    if (name === 'author.firstName' || name === 'author.lastName' || name === 'author.biography') {
      const key = name.split('.')[1]; // firstName, lastName, or biography
      setBook((prev) => ({
        ...prev,
        author: {
          ...prev.author,
          [key]: value
        }
      }));
    } else {
      setBook((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...book,
      title: book.title,
      author: {
        firstName: book.author.firstName,
        lastName: book.author.lastName,
        biography: book.author.biography
      },
      year: parseInt(book.year),
      price: parseFloat(book.price),
      isbn: book.isbn?.toString(),
      stockQuantity: parseInt(book.stockQuantity)
    };

    const action = isEdit ? updateBook(id, payload) : createBook(payload);

    action
      .then(() => navigate('/books'))
      .catch((err) => { setError(err.message);
    });

  };

  return (
    <div className="p-6 pt-20 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{isEdit ? 'Edit Book' : 'Add New Book'}</h1>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <BookFormFields book={book} handleChange={handleChange} />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          {isEdit ? 'Update Book' : 'Create Book'}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
