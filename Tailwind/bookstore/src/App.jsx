import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import BookList from './pages/BookList';
import BookDetail from './pages/BookDetail';
import BookForm from './pages/BookForm';
import AuthorList from './pages/AuthorList';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authors" element={<AuthorList />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/books/new" element={<BookForm />} />
        <Route path="/books/:id/edit" element={<BookForm />} />
      </Routes>
    </>



  );
}

export default App;
