import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaArrowLeft, FaSearch, FaStore, FaMapMarkerAlt, FaBox, FaWeightHanging, FaBoxOpen, FaPhone, FaMoneyBillWave } from 'react-icons/fa';

const OrderHistory = () => {
  const [packages, setPackages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeliveredPackages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/packages/status/delivered');
        setPackages(response.data);
        setLoading(false);
      } catch (error) {
        toast.error('Failed to fetch delivered packages');
        setLoading(false);
      }
    };

    fetchDeliveredPackages();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/packages/search?query=${searchTerm}`);
      setPackages(response.data.filter(pkg => pkg.status === 'delivered'));
    } catch (error) {
      toast.error('Failed to search packages');
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
      <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">Order History</h1> 
      <button
        onClick={() => window.history.back()}
        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300 flex items-center justify-center"
      >
        <FaArrowLeft className="h-5 w-5" />
      </button>
      
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Search Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex">
            <div className="relative flex-grow">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
              <input
                type="text"
                placeholder="Search by store, address or phone"
                className="w-full pl-10 pr-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <button
              onClick={handleSearch}
              className="ml-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300"
            >
              Search
            </button>
          </div>
        </div>
        
        {/* Orders Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-purple-200">
              <thead className="bg-purple-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                    <FaStore className="inline mr-1" /> Store
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                    <FaPhone className="inline mr-1" /> Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                    <FaMapMarkerAlt className="inline mr-1" /> Address
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                    Material
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                    <FaBox className="inline mr-1" /> Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                    Size
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                    <FaWeightHanging className="inline mr-1" /> Weight
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                    <FaBoxOpen className="inline mr-1" /> Qty
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                    <FaMoneyBillWave className="inline mr-1" /> Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                    Delivered On
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-purple-200">
                {packages.map((pkg) => (
                  <tr key={pkg.id} className="hover:bg-purple-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {pkg.store_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {pkg.ph_no}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {pkg.address}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {pkg.material}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 capitalize">
                      {pkg.package_type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {pkg.size}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {pkg.weight} kg
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {pkg.no_of_packages}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      ₹{parseFloat(pkg.price).toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {new Date(pkg.updated_at).toLocaleDateString()}
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

export default OrderHistory;