import pool from '../config/db.js';

class Worker {
  static async findByUsername(username) {
    try {
      const [rows] = await pool.query(
        'SELECT * FROM workers WHERE username = ?', 
        [username]
      );
      return rows[0];
    } catch (error) {
      console.error('Database error in findByUsername:', error);
      throw error;
    }
  }

  static async create(workerData) {
    const { first_name, last_name, address, phone, job, username, password } = workerData;
    const [result] = await pool.query(
      'INSERT INTO workers (first_name, last_name, address, phone, job, username, password) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [first_name, last_name, address, phone, job, username, password] // Storing plain text password
    );
    return result.insertId;
  }

  static async getAll() {
    const [rows] = await pool.query(
      'SELECT id, first_name, last_name, address, phone, job, username FROM workers WHERE job != "admin"'
    );
    return rows;
  }

  static async delete(id) {
    const [result] = await pool.query(
      'DELETE FROM workers WHERE id = ?',
      [id]
    );
    return result.affectedRows;
  }
}

export default Worker;