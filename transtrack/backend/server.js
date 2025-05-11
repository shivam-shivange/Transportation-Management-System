import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import packageRoutes from './routes/packageRoutes.js';
import workerRoutes from './routes/workerRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware Configuration
app.use(cors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true
}));
app.use(express.json()); // For parsing application/json

// Route Handlers
app.use('/api/auth', authRoutes);       // Authentication routes
app.use('/api/packages', packageRoutes); // Package management routes
app.use('/api/workers', workerRoutes);   // Worker management routes

// Health Check Endpoint
app.get('/', (req, res) => {
  res.send('Transtrack API is running');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Authentication mode: PLAIN TEXT PASSWORDS (INSECURE)');
});