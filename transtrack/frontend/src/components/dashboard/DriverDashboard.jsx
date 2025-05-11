import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Overview from './Overview';
import UpdateOrder from '../orders/UpdateOrder';
import OrderHistory from '../orders/OrderHistory';
import DriverOrders from './DriverOrders'; // New component

const DriverDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-purple-50">
    <Navbar isAdmin={false} />
    <div className="container mx-auto p-4">
      <Routes>
        <Route index element={<Overview />} />
        <Route path="orders" element={<DriverOrders />} />
        <Route path="orders/update" element={<UpdateOrder />} />
        <Route path="orders/history" element={<OrderHistory />} />
      </Routes>
    </div>
  </div>
  );
};

export default DriverDashboard;