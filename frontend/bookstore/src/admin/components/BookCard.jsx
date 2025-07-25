const BookCard = ({ book }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition bg-white">
      <div className="h-32 w-full bg-blue-100 rounded flex items-center justify-center mb-4 overflow-hidden">
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
          <span className="text-4xl">📘</span>
        )}
      </div>

      {/* Book Info */}
      <h3 className="text-lg font-semibold">{book.title}</h3>
      <p className="text-sm text-gray-700">Author: {book.author?.fullName || 'Unknown'}</p>
      <p className="text-sm text-gray-500">Year: {book.year}</p>
      <p className="text-sm text-blue-600 font-semibold">${book.price}</p>
      <p className="text-sm text-gray-400">Stock: {book.stockQuantity}</p>
    </div>
  );
};

export default BookCard;
