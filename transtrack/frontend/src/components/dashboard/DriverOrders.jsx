import { Link } from 'react-router-dom';
import { FaEdit, FaHistory } from 'react-icons/fa';

export default function DriverOrders() {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-blue-100 to-sky-50">
      <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">Driver Orders</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Link
          to="/driver/orders/update"
          className="bg-white hover:bg-blue-100 transition-all duration-300 p-6 rounded-xl shadow-lg hover:shadow-xl flex flex-col items-center text-center"
        >
          <FaEdit className="text-blue-600 text-4xl mb-4" />
          <h2 className="text-lg font-semibold text-blue-800">Update Order Status</h2>
          <p className="text-sm text-gray-600 mt-2">Mark packages as delivered or update their status</p>
        </Link>

        <Link
          to="/driver/orders/history"
          className="bg-white hover:bg-blue-100 transition-all duration-300 p-6 rounded-xl shadow-lg hover:shadow-xl flex flex-col items-center text-center"
        >
          <FaHistory className="text-blue-600 text-4xl mb-4" />
          <h2 className="text-lg font-semibold text-blue-800">View Order History</h2>
          <p className="text-sm text-gray-600 mt-2">Review completed deliveries and logs</p>
        </Link>
      </div>
    </div>
  );
}
