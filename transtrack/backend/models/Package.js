import pool from '../config/db.js';

class Package {
  // Update the create method
  static async create(packageData) {
    const { store_name, address, package_type, size, weight, no_of_packages, material, ph_no, price } = packageData;
    const [result] = await pool.query(
      'INSERT INTO packages (store_name, address, package_type, size, weight, no_of_packages, material, ph_no, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [store_name, address, package_type, size, weight, no_of_packages, material, ph_no, price]
    );
    return result.insertId;
  }

  // Update the update method
  static async update(id, updateData) {
    const { store_name, address, package_type, size, weight, no_of_packages, material, status, ph_no, price } = updateData;
    const [result] = await pool.query(
      'UPDATE packages SET store_name = ?, address = ?, package_type = ?, size = ?, weight = ?, no_of_packages = ?, material = ?, status = ?, ph_no = ?, price = ? WHERE id = ?',
      [store_name, address, package_type, size, weight, no_of_packages, material, status, ph_no, price, id]
    );
    return result.affectedRows;
  }

  static async getAll() {
    const [rows] = await pool.query('SELECT * FROM packages');
    return rows;
  }

  static async getById(id) {
    const [rows] = await pool.query('SELECT * FROM packages WHERE id = ?', [id]);
    return rows[0];
  }

  static async updateStatus(id, status) {
    const [result] = await pool.query('UPDATE packages SET status = ? WHERE id = ?', [status, id]);
    return result.affectedRows;
  }

  static async getByStatus(status) {
    const [rows] = await pool.query('SELECT * FROM packages WHERE status = ?', [status]);
    return rows;
  }

  static async search(query) {
    const [rows] = await pool.query(
      'SELECT * FROM packages WHERE store_name LIKE ? OR address LIKE ? OR ph_no LIKE ?',
      [`%${query}%`, `%${query}%`, `%${query}%`]
    );
    return rows;
  }
}

export default Package;