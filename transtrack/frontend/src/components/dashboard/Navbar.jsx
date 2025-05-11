import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaHome, FaTruck, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = ({ isAdmin }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-indigo-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight">Transtrack</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink to={isAdmin ? '/admin' : '/driver'} icon={<FaHome className="mr-1" />} label="Overview" />
            <NavLink to={isAdmin ? '/admin/orders' : '/driver/orders'} icon={<FaTruck className="mr-1" />} label="Orders" />
            {isAdmin && <NavLink to="/admin/workers" icon={<FaUsers className="mr-1" />} label="Workers" />}
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 rounded-md text-sm font-medium bg-red-600 hover:bg-red-700 transition-colors duration-200"
              aria-label="Logout"
            >
              <FaSignOutAlt className="mr-1" />
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-700 focus:outline-none"
              aria-label="Main menu"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <NavLink to={isAdmin ? '/admin' : '/driver'} icon={<FaHome className="mr-1" />} label="Overview" />
          <NavLink to={isAdmin ? '/admin/orders' : '/driver/orders'} icon={<FaTruck className="mr-1" />} label="Orders" />
          {isAdmin && <NavLink to="/admin/workers" icon={<FaUsers className="mr-1" />} label="Workers" />}
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-3 py-2 rounded-md text-sm font-medium bg-red-600 hover:bg-red-700 transition-colors duration-200"
          >
            <FaSignOutAlt className="mr-1" />
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

// Reusable NavLink
const NavLink = ({ to, icon, label }) => (
  <Link
    to={to}
    className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors duration-200"
  >
    {icon}
    {label}
  </Link>
);

export default Navbar;
