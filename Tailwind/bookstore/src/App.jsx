import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'

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
      </Routes>
    </>



  );
}

export default App;
