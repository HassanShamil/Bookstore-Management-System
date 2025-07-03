import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './admin/components/Navbar';
import Home from './admin/pages/Home'
import BookList from './admin/pages/BookList';
import BookDetail from './admin/pages/BookDetail';
import BookForm from './admin/pages/BookForm';
import AuthorList from './admin/pages/AuthorList';
import SideBar from './admin/components/SideBar';
import OrderDetail from './admin/pages/OrderDetail';


function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen overflow-hidden">
      <SideBar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'md:ml-48' : 'md:ml-16'}`}>
        <Navbar />

        
        <main className="p-4 flex-1 overflow-y-auto bg-gray-50">
        {/* <main className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'md:ml-48' : 'md:ml-16'}`}> */}
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

export default App