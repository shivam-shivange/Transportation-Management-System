import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaArrowLeft, FaUser, FaAddressCard, FaPhone, FaBriefcase, FaUserCircle, FaKey } from 'react-icons/fa';

const AddWorker = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    address: '',
    phone: '',
    job: 'driver',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/workers', formData);
      toast.success('Worker added successfully');
      setFormData({
        first_name: '',
        last_name: '',
        address: '',
        phone: '',
        job: 'driver',
        username: '',
        password: '',
      });
    } catch (error) {
      toast.error('Failed to add worker');
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-violet-100 to-purple-50">
      <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">Add New Worker</h1>
      <button
        onClick={() => window.history.back()}
        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300 flex items-center justify-center"
      >
        <FaArrowLeft className="h-5 w-5" />
      </button>
      
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-purple-800 flex items-center gap-2">
                <FaUser className="text-purple-600" /> Personal Information
              </h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  name="first_name"
                  type="text"
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  name="last_name"
                  type="text"
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  name="address"
                  type="text"
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  name="phone"
                  type="text"
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            {/* Job & Account Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-purple-800 flex items-center gap-2">
                <FaBriefcase className="text-purple-600" /> Job & Account
              </h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Role</label>
                <select
                  name="job"
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.job}
                  onChange={handleChange}
                  required
                >
                  <option value="driver">Driver</option>
                  <option value="porter">Porter</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input
                  name="username"
                  type="text"
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  name="password"
                  type="password"
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300"
            >
              Add Worker
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWorker;