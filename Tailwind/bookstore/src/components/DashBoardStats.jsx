// components/DashboardStats.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaUsers, FaUserEdit, FaBoxOpen, FaBook } from "react-icons/fa";

const DashboardStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Customers <FaUsers className="text-blue-600" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{stats.customers}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Authors <FaUserEdit className="text-purple-600" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{stats.authors}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Orders <FaBoxOpen className="text-green-600" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{stats.orders}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Books <FaBook className="text-yellow-600" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{stats.books}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
