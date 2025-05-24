import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import BookList from './pages/BookList';
import BookDetail from './pages/BookDetail';
import BookForm from './pages/BookForm';


function App() {
  return (
    // <>
    //   <Navbar></Navbar>
    //   <div className="min-h-screen flex items-center justify-center bg-blue-100 text-blue-600 text-3xl font-bold">
    //   Welcome to the bookstore application
    //  </div>
    //  <Home></Home>
    // </>

    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/books/new" element={<BookForm />} />
        <Route path="/books/:id/edit" element={<BookForm />} />
      </Routes>
    </>



  );
}

export default App;
