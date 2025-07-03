import DashboardStats from '@/admin/components/DashBoardStats';
import { Link } from 'react-router-dom';
import AdvancedStatCard from '@/admin/components/AdvancedStatCard';
import { FaBook, FaUserEdit, FaBoxOpen, FaUsers, FaDollarSign } from "react-icons/fa";
import DashboardChart from '@/admin/components/DashboardChart';
import RecentOrders from '@/admin/components/RecentOrders';
import QuickActions from '@/admin/components/QuickActions';


export default function Home() {

    const stats = {
    customers: 1240,
    authors: 67,
    orders: 342,
    books: 1289,
  };


  return (
    <div className="min-h-screen bg-gray-100 p-8 ">
      {/* <div className="max-w-4xl mx-auto text-center">
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
      </div> */}
      <div className="">
  
        {/* <h2 className="text-2xl font-semibold mb-6">📊 Dashboard Overview</h2> */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">

          <AdvancedStatCard
            title="Books in Store"
            value="1,289"
            growth={12.3}
            icon={<FaBook />}
            positive={true}
          />
          <AdvancedStatCard
            title="Registered Authors"
            value="67"
            growth={-4.5}
            icon={<FaUserEdit />}
            positive={false}
          />
          <AdvancedStatCard
            title="Orders This Week"
            value="342"
            growth={8.9}
            icon={<FaBoxOpen />}
            positive={true}
          />
          <AdvancedStatCard
            title="New Customers"
            value="124"
            growth={5.2}
            icon={<FaUsers />}
            positive={true}
          />
          <AdvancedStatCard
            title="Revenue"
            value="$5,320"
            growth={14.7}
            icon={<FaDollarSign />}
            positive={true}
          />
        </div>
      </div>

      <div className="p-4">
  <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

  {/* Chart + Orders */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
    <div className="col-span-1 lg:col-span-2 flex flex-col">
      <DashboardChart />
    </div>
    <div className="col-span-1 flex flex-col">
      <RecentOrders />
    </div>
  </div>

  {/* Full-width Quick Actions below */}
  <div className="mt-6">
    <QuickActions />
  </div>
</div>


      
    </div>
  );
}
