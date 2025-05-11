import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaArrowLeft, FaSearch, FaEdit, FaTimes, FaStore, FaMapMarkerAlt, FaBox, FaWeightHanging, FaBoxes, FaTruck, FaCheckCircle, FaPhone, FaMoneyBillWave } from 'react-icons/fa';

const UpdateOrder = () => {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/packages');
        setPackages(response.data);
        setLoading(false);
      } catch (error) {
        toast.error('Failed to fetch packages');
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/packages/search?query=${searchTerm}`);
      setPackages(response.data);
    } catch (error) {
      toast.error('Failed to search packages');
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/packages/${selectedPackage.id}`, selectedPackage);
      toast.success('Package updated successfully');
      const response = await axios.get('http://localhost:5000/api/packages');
      setPackages(response.data);
      setSelectedPackage(null);
    } catch (error) {
      toast.error('Failed to update package');
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
      <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">Update Orders</h1>
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
        
        {selectedPackage ? (
          /* Edit Form */
          <div className="bg-white rounded-xl shadow-lg p-6">
            <form onSubmit={handleUpdate} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-purple-800 flex items-center gap-2">
                    <FaStore className="text-purple-600" /> Store Information
                  </h2>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Store Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={selectedPackage.store_name}
                      onChange={(e) => setSelectedPackage({ ...selectedPackage, store_name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={selectedPackage.address}
                      onChange={(e) => setSelectedPackage({ ...selectedPackage, address: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={selectedPackage.ph_no}
                      onChange={(e) => setSelectedPackage({ ...selectedPackage, ph_no: e.target.value })}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-purple-800 flex items-center gap-2">
                    <FaBox className="text-purple-600" /> Package Details
                  </h2>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Package Type</label>
                    <select
                      className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={selectedPackage.package_type}
                      onChange={(e) => setSelectedPackage({ ...selectedPackage, package_type: e.target.value })}
                      required
                    >
                      <option value="box">Box</option>
                      <option value="sack">Sack</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Material Inside</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={selectedPackage.material}
                      onChange={(e) => setSelectedPackage({ ...selectedPackage, material: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={selectedPackage.size}
                      onChange={(e) => setSelectedPackage({ ...selectedPackage, size: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
                    <input
                      type="number"
                      step="0.01"
                      className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={selectedPackage.weight}
                      onChange={(e) => setSelectedPackage({ ...selectedPackage, weight: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Number of Packages</label>
                    <input
                      type="number"
                      min="1"
                      className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={selectedPackage.no_of_packages}
                      onChange={(e) => setSelectedPackage({ ...selectedPackage, no_of_packages: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">Price</label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={selectedPackage.price}
                      onChange={(e) => setSelectedPackage({ ...selectedPackage, price: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                      className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={selectedPackage.status}
                      onChange={(e) => setSelectedPackage({ ...selectedPackage, status: e.target.value })}
                      required
                    >
                      <option value="pending">Pending</option>
                      <option value="out_for_delivery">Out for Delivery</option>
                      <option value="delivered">Delivered</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setSelectedPackage(null)}
                  className="px-4 py-2 border border-purple-600 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-300 flex items-center gap-2"
                >
                  <FaTimes /> Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300 flex items-center gap-2"
                >
                  <FaEdit /> Update Order
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Orders List */
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
                      <FaMoneyBillWave className="inline mr-1" /> Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                      Actions
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        ₹{parseFloat(pkg.price).toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span
                          className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            pkg.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : pkg.status === 'out_for_delivery'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-green-100 text-green-800'
                          }`}
                        >
                          {pkg.status === 'pending' && <FaBoxes className="inline mr-1" />}
                          {pkg.status === 'out_for_delivery' && <FaTruck className="inline mr-1" />}
                          {pkg.status === 'delivered' && <FaCheckCircle className="inline mr-1" />}
                          {pkg.status.replace(/_/g, ' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        <button
                          onClick={() => setSelectedPackage(pkg)}
                          className="text-purple-600 hover:text-purple-800 font-medium flex items-center gap-1"
                        >
                          <FaEdit /> Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateOrder;