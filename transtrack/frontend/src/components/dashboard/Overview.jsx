import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import logo from './transtrack logo.jpg'; // Update path if needed

const Overview = () => {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    out_for_delivery: 0,
    delivered: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [totalRes, pendingRes, outRes, deliveredRes] = await Promise.all([
          axios.get('http://localhost:5000/api/packages'),
          axios.get('http://localhost:5000/api/packages/status/pending'),
          axios.get('http://localhost:5000/api/packages/status/out_for_delivery'),
          axios.get('http://localhost:5000/api/packages/status/delivered'),
        ]);

        setStats({
          total: totalRes.data.length,
          pending: pendingRes.data.length,
          out_for_delivery: outRes.data.length,
          delivered: deliveredRes.data.length,
        });
        setLoading(false);
      } catch (error) {
        toast.error('Failed to fetch statistics');
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-lg text-gray-600">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100 px-4 pt-16 pb-12 flex flex-col items-center">
      {/* Logo Section */}
      <div className="mb-10 flex flex-col items-center">
        <img
          src={logo}
          alt="TransTrack Logo"
          className="h-60 w-auto rounded-2xl shadow-lg object-contain"
        />
        <h2 className="mt-4 text-3xl font-bold text-purple-800">Delivery Statistics</h2>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        <StatCard label="Total Shipments" value={stats.total} color="text-purple-700" />
        <StatCard label="Pending Orders" value={stats.pending} color="text-yellow-500" />
        <StatCard label="Active Deliveries" value={stats.out_for_delivery} color="text-blue-500" />
        <StatCard label="Delivered" value={stats.delivered} color="text-green-600" />
      </div>
    </div>
  );
};

// Reusable Stat Card Component
const StatCard = ({ label, value, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
    <h3 className="text-lg font-semibold text-gray-700">{label}</h3>
    <p className={`text-4xl font-bold mt-2 ${color}`}>{value}</p>
  </div>
);

export default Overview;
