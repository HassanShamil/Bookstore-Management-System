// const BookCard = ({ book }) => {
//   return (
//     <div className="border p-4 rounded shadow hover:shadow-md transition">
//       <h3 className="text-lg font-semibold">{book.title}</h3>
//       <p className="text-sm text-gray-700">Author: {book.author}</p>
//       <p className="text-sm text-gray-500">Genre: {book.genre}</p>
//       <p className="text-sm text-blue-600 font-semibold">${book.price}</p>
//       <p className="text-sm text-gray-400">Stock: {book.stock}</p>
//     </div>
//   );
// };

const BookCard = ({ book }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition bg-white">
      {/* Placeholder image section */}
      <div className="h-32 w-full bg-blue-100 rounded flex items-center justify-center mb-4">
        <span className="text-4xl">📘</span>
      </div>

      {/* Book Info */}
      <h3 className="text-lg font-semibold">{book.title}</h3>
      <p className="text-sm text-gray-700">Author: {book.author}</p>
      <p className="text-sm text-gray-500">Genre: {book.genre}</p>
      <p className="text-sm text-blue-600 font-semibold">${book.price}</p>
      <p className="text-sm text-gray-400">Stock: {book.stock}</p>
    </div>
  );
};

export default BookCard;


