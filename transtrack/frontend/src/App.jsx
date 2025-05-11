import { useLocation } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Login from './components/auth/Login';
import AdminDashboard from './components/dashboard/AdminDashboard';
import DriverDashboard from './components/dashboard/DriverDashboard';
import Footer from './components/dashboard/Footer';

function App() {
  const location = useLocation();

  return (
    <AuthProvider>
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/driver/*" element={<DriverDashboard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {location.pathname !== '/' && <Footer />}
      </>
    </AuthProvider>
  );
}

export default App;
