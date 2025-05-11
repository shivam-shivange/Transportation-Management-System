import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import truckBackground from './truck.jpg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(username, password);
    if (!result.success) {
      toast.error(result.message);
    }
  };

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with truck */}
      <img 
        src={truckBackground} 
        className="absolute inset-0 w-full h-full object-cover object-center"
        alt="Truck background"
        style={{ objectPosition: '50% 70%' }} 
      />
      
      {/* Semi-transparent overlay (darker at bottom) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40"></div>
      
      <div 
        className="relative bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-xl w-full max-w-md border border-white/20 mx-4"
        style={{ 
          marginLeft: '60%',
          backdropFilter: 'blur(16px)'
        }}
      >
        <h1 className="text-3xl font-bold text-center text-white mb-8 drop-shadow-md">Transtrack Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-white/90 text-sm font-medium mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="w-full px-4 py-3 bg-white/20 text-white placeholder-white/60 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>
          <div className="mb-7">
            <label className="block text-white/90 text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-3 bg-white/20 text-white placeholder-white/60 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-gray-900 py-3 px-4 rounded-lg font-medium hover:bg-white/90 transition duration-200 shadow-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;