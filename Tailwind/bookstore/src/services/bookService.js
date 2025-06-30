const BASE_URL = 'http://localhost:8080/CSA_CW/rest/books';

// export const getAllBooks = async () => {
//   const res = await fetch(BASE_URL);
//   if (!res.ok) throw new Error('Failed to fetch books');
//   //return res.json();

//   const book = await res.json();

//   // Add cover url to the book object
//   return {
//     ...book,
//     cover: getBookCoverUrl(book.isbn),
//   };
// };

export const getAllBooks = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error('Failed to fetch books');

  const books = await res.json(); 

  // Add cover url to each book
  return books.map(book => ({
    ...book,
    cover: getBookCoverUrl(book.isbn),
  }));
};

export const getBookById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error('Failed to fetch book');
  //return res.json();
  const book = await res.json();

  return {
    ...book,
    cover: getBookCoverUrl(book.isbn),
  };

}


export const createBook = async (book) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });

  if (!res.ok) {
    let errorMessage = 'Failed to create book';

    try {
      const errorData = await res.json();
      errorMessage = errorData.message || errorData.Error || errorMessage;
    } catch {
      
      const text = await res.text();
      if (text) errorMessage = text;
    }

    throw new Error(errorMessage);
  }

  return res.json();
};


export const updateBook = async (id, book) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });
  if (!res.ok) throw new Error('Failed to update book');
  return res.json();
};

export const deleteBook = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete book');
};


export function getBookCoverUrl(isbn) {
  if (!isbn) return null;
  const cleanIsbn = isbn.replace(/-/g, '');
  return `https://covers.openlibrary.org/b/isbn/${cleanIsbn}-L.jpg`;
}


