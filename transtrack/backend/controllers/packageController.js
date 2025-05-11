import Package from '../models/Package.js';

export const createPackage = async (req, res) => {
  try {
    const packageData = req.body;
    const newPackage = await Package.create(packageData);
    res.status(201).json(newPackage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getAllPackages = async (req, res) => {
  try {
    const packages = await Package.getAll();
    res.json(packages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getPackageById = async (req, res) => {
  try {
    const { id } = req.params;
    const packageItem = await Package.getById(id);
    if (!packageItem) {
      return res.status(404).json({ message: 'Package not found' });
    }
    res.json(packageItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updatePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const affectedRows = await Package.update(id, updateData);
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Package not found' });
    }
    res.json({ message: 'Package updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updatePackageStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const affectedRows = await Package.updateStatus(id, status);
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Package not found' });
    }
    res.json({ message: 'Package status updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getPackagesByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    const packages = await Package.getByStatus(status);
    res.json(packages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const searchPackages = async (req, res) => {
  try {
    const { query } = req.query;
    const packages = await Package.search(query);
    res.json(packages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};