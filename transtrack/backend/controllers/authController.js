import jwt from 'jsonwebtoken';
import Worker from '../models/Worker.js';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username, job: user.job },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );
};

export const login = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Input validation
      if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
      }
  
      const worker = await Worker.findByUsername(username);
      
      if (!worker) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Plain text comparison
      if (password !== worker.password) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      const token = generateToken(worker);
      res.json({ 
        token, 
        user: { 
          id: worker.id, 
          username: worker.username, 
          job: worker.job 
        } 
      });
  
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Server error during login' });
    }
  };