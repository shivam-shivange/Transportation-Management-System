import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaArrowLeft, FaStore, FaMapMarkerAlt, FaBox, FaWeightHanging, FaBoxes, FaPhone, FaMoneyBillWave } from 'react-icons/fa';

const CreateOrder = () => {
  const [formData, setFormData] = useState({
    store_name: '',
    address: '',
    package_type: 'box',
    size: '',
    weight: '',
    no_of_packages: 1,
    material: '',
    ph_no: '',
    price: ''
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
      await axios.post('http://localhost:5000/api/packages', formData);
      toast.success('Order created successfully');
      setFormData({
        store_name: '',
        address: '',
        package_type: 'box',
        size: '',
        weight: '',
        no_of_packages: 1,
        material: '',
        ph_no: '',
        price: ''
      });
    } catch (error) {
      toast.error('Failed to create order');
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-violet-100 to-purple-50">
      <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">Create New Order</h1> 
      <button
        onClick={() => window.history.back()}
        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300 flex items-center justify-center"
      >
        <FaArrowLeft className="h-5 w-5" />
      </button>
      
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Customer Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-purple-800 flex items-center gap-2">
                <FaStore className="text-purple-600" /> Store Information
              </h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Store Name</label>
                <input
                  name="store_name"
                  type="text"
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.store_name}
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
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">Phone Number</label>
                <input
                  name="ph_no"
                  type="tel"
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.ph_no}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            {/* Package Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-purple-800 flex items-center gap-2">
                <FaBox className="text-purple-600" /> Package Details
              </h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Package Type</label>
                <select
                  name="package_type"
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.package_type}
                  onChange={handleChange}
                  required
                >
                  <option value="box">Box</option>
                  <option value="sack">Sack</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Material Inside</label>
                <input
                  name="material"
                  type="text"
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.material}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
                <input
                  name="size"
                  type="text"
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.size}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
                <input
                  name="weight"
                  type="number"
                  step="0.01"
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Packages</label>
                <input
                  name="no_of_packages"
                  type="number"
                  min="1"
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.no_of_packages}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">Price</label>
                <input
                  name="price"
                  type="number"
                  step="0.01"
                  min="0"
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.price}
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
              Create Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateOrder;