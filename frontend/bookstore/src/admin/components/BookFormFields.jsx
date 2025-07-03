const BookFormFields = ({ book, handleChange }) => {
  return (
    <>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={book.title}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />
      <input
        type="text"
        name="author.firstName"
        placeholder="Author"
        value={book.author.firstName}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />
      <input
        type="text"
        name="author.lastName"
        placeholder="Author"
        value={book.author.lastName}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />
      <input
        type="text"
        name="author.biography"
        placeholder="Biography"
        value={book.author.biography}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />  
      <input
        type="text"
        name="year"
        placeholder="Year"
        value={book.year}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={book.price}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />
      <input
        type="text"
        name="isbn"
        placeholder="ISBN"
        value={book.isbn}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />
      <input
        type="number"
        name="stockQuantity"
        placeholder="Stock"
        value={book.stockQuantity}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />
    </>
  );
};

export default BookFormFields;
