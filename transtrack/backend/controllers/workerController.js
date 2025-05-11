import bcrypt from 'bcryptjs';
import Worker from '../models/Worker.js';

export const getAllWorkers = async (req, res) => {
  try {
    const workers = await Worker.getAll();
    res.json(workers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const createWorker = async (req, res) => {
    try {
      const workerData = req.body;
      
      // Remove password hashing - store plain text
      const newWorker = await Worker.create(workerData);
      
      res.status(201).json(newWorker);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };

export const deleteWorker = async (req, res) => {
  try {
    const { id } = req.params;
    const affectedRows = await Worker.delete(id);
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Worker not found' });
    }
    res.json({ message: 'Worker deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};