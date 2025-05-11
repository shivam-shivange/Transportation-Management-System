import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Overview from './Overview';
import CreateOrder from '../orders/CreateOrder';
import UpdateOrder from '../orders/UpdateOrder';
import OrderHistory from '../orders/OrderHistory';
import AddWorker from '../workers/AddWorker';
import RemoveWorker from '../workers/RemoveWorker';
import AdminOrders from './AdminOrders'; // New component
import AdminWorkers from './AdminWorkers'; // New component

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-purple-50">
      <Navbar isAdmin={true} />
      <div className="container mx-auto p-4">
        <Routes>
          <Route index element={<Overview />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="orders/create" element={<CreateOrder />} />
          <Route path="orders/update" element={<UpdateOrder />} />
          <Route path="orders/history" element={<OrderHistory />} />
          <Route path="workers" element={<AdminWorkers />} />
          <Route path="workers/add" element={<AddWorker />} />
          <Route path="workers/remove" element={<RemoveWorker />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;