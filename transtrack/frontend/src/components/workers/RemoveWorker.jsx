import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaArrowLeft, FaUser, FaAddressCard, FaPhone, FaBriefcase, FaUserCircle, FaTrash } from 'react-icons/fa';

const RemoveWorker = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/workers');
        setWorkers(response.data);
        setLoading(false);
      } catch (error) {
        toast.error('Failed to fetch workers');
        setLoading(false);
      }
    };

    fetchWorkers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this worker?')) {
      try {
        await axios.delete(`http://localhost:5000/api/workers/${id}`);
        setWorkers(workers.filter(worker => worker.id !== id));
        toast.success('Worker deleted successfully');
      } catch (error) {
        toast.error('Failed to delete worker');
      }
    }
  };

  if (loading) {
    return (
      <div className="p-6 min-h-screen bg-gradient-to-br from-violet-100 to-purple-50 flex items-center justify-center">
        <div className="text-purple-700">Loading...</div>
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-violet-100 to-purple-50">
      <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">Manage Workers</h1>
      <button
        onClick={() => window.history.back()}
        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300 flex items-center justify-center"
      >
        <FaArrowLeft className="h-5 w-5" />
      </button>
      
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-purple-200">
              <thead className="bg-purple-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                    <FaUser className="inline mr-1" /> Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                    <FaAddressCard className="inline mr-1" /> Address
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                    <FaPhone className="inline mr-1" /> Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                    <FaBriefcase className="inline mr-1" /> Job
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                    <FaUserCircle className="inline mr-1" /> Username
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-purple-200">
                {workers.map((worker) => (
                  <tr key={worker.id} className="hover:bg-purple-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {worker.first_name} {worker.last_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {worker.address}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {worker.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 capitalize">
                      {worker.job}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {worker.username}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <button
                        onClick={() => handleDelete(worker.id)}
                        className="text-red-600 hover:text-red-800 font-medium flex items-center gap-1"
                      >
                        <FaTrash /> Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveWorker;