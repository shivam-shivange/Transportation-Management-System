-- Create the database
CREATE DATABASE IF NOT EXISTS transtrack;
USE transtrack;

-- Create the workers table
CREATE TABLE IF NOT EXISTS workers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    job ENUM('admin', 'driver', 'porter') NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the packages table
CREATE TABLE IF NOT EXISTS packages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    store_name VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    ph_no VARCHAR(15),
    material VARCHAR(50),
    price DECIMAL(10,2),
    package_type ENUM('box', 'sack') NOT NULL,
    size VARCHAR(50) NOT NULL,
    weight DECIMAL(10,2) NOT NULL,
    no_of_packages INT NOT NULL,
    status ENUM('pending', 'out_for_delivery', 'delivered') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default admin user
-- WARNING: For production, store hashed passwords, not plain text
INSERT INTO workers (first_name, last_name, address, phone, job, username, password)
VALUES (
    'Admin', 'User', '123 Admin St', '1234567890', 'admin', 'admin', 'admin123'
);
