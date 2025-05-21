import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">📚 Welcome to Bookstore Manager</h1>
        <p className="text-lg text-gray-700 mb-10">
          Manage your books, authors, and customers efficiently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/books" className="bg-white shadow-md hover:shadow-xl p-6 rounded-lg border border-gray-200 hover:border-blue-500">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Books</h2>
            <p className="text-gray-600">Add, update, delete, or view all books.</p>
          </Link>
          <Link to="/authors" className="bg-white shadow-md hover:shadow-xl p-6 rounded-lg border border-gray-200 hover:border-blue-500">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Authors</h2>
            <p className="text-gray-600">Manage author profiles and details.</p>
          </Link>
          <Link to="/customers" className="bg-white shadow-md hover:shadow-xl p-6 rounded-lg border border-gray-200 hover:border-blue-500">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Customers</h2>
            <p className="text-gray-600">Track and manage customer data.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
