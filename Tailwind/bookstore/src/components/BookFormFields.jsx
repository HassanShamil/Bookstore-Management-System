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
        name="author"
        placeholder="Author"
        value={book.author}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={book.genre}
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
        type="number"
        name="stock"
        placeholder="Stock"
        value={book.stock}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />
    </>
  );
};

export default BookFormFields;
