import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import BookList from './pages/BookList';
import BookDetail from './pages/BookDetail';
import BookForm from './pages/BookForm';
import AuthorList from './pages/AuthorList';
import SideBar from './components/SideBar';
import OrderDetail from './pages/OrderDetail';


function App() {
  return (
    <div className="flex flex-col md:flex-row">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/authors" element={<AuthorList />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/books/new" element={<BookForm />} />
            <Route path="/books/:id/edit" element={<BookForm />} />
            <Route path="/orders/:id" element={<OrderDetail />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}


export default App;
