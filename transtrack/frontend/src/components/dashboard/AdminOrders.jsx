import { Link } from 'react-router-dom';
import { FaPlusCircle, FaEdit, FaHistory } from 'react-icons/fa';

export default function AdminOrders() {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-violet-100 to-purple-50">
      <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">Admin Order Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Create New Order */}
        <Link
          to="/admin/orders/create"
          className="bg-white hover:bg-purple-100 transition-all duration-300 p-6 rounded-xl shadow-lg hover:shadow-xl flex flex-col items-center text-center"
        >
          <FaPlusCircle className="text-purple-600 text-4xl mb-4" />
          <h2 className="text-lg font-semibold text-purple-800">Create New Order</h2>
          <p className="text-sm text-gray-600 mt-2">Add a new package order to the system</p>
        </Link>

        {/* Update Orders */}
        <Link
          to="/admin/orders/update"
          className="bg-white hover:bg-purple-100 transition-all duration-300 p-6 rounded-xl shadow-lg hover:shadow-xl flex flex-col items-center text-center"
        >
          <FaEdit className="text-purple-600 text-4xl mb-4" />
          <h2 className="text-lg font-semibold text-purple-800">Update Orders</h2>
          <p className="text-sm text-gray-600 mt-2">Modify existing orders or update their status</p>
        </Link>

        {/* View History */}
        <Link
          to="/admin/orders/history"
          className="bg-white hover:bg-purple-100 transition-all duration-300 p-6 rounded-xl shadow-lg hover:shadow-xl flex flex-col items-center text-center"
        >
          <FaHistory className="text-purple-600 text-4xl mb-4" />
          <h2 className="text-lg font-semibold text-purple-800">View History</h2>
          <p className="text-sm text-gray-600 mt-2">Check past delivery logs and statuses</p>
        </Link>
      </div>
    </div>
  );
}
