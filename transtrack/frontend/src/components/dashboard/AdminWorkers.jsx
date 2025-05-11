import { Link } from 'react-router-dom';
import { FaUserPlus, FaUserMinus } from 'react-icons/fa';

export default function AdminWorkers() {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">Manage Workers</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Link
          to="/admin/workers/add"
          className="bg-white hover:bg-green-100 transition-all duration-300 p-6 rounded-xl shadow-lg hover:shadow-xl flex flex-col items-center text-center"
        >
          <FaUserPlus className="text-green-600 text-4xl mb-4" />
          <h2 className="text-lg font-semibold text-green-800">Add New Worker</h2>
          <p className="text-sm text-gray-600 mt-2">Register a new delivery worker</p>
        </Link>

        <Link
          to="/admin/workers/remove"
          className="bg-white hover:bg-red-100 transition-all duration-300 p-6 rounded-xl shadow-lg hover:shadow-xl flex flex-col items-center text-center"
        >
          <FaUserMinus className="text-red-600 text-4xl mb-4" />
          <h2 className="text-lg font-semibold text-red-800">Remove Worker</h2>
          <p className="text-sm text-gray-600 mt-2">Deactivate or delete an existing worker</p>
        </Link>
      </div>
    </div>
  );
}
