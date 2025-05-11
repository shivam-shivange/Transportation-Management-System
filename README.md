# TransTrack – Goods and Packages Management System

## Abstract

The creation of the full-stack goods and packages management system **TransTrack** for transportation companies is described in this study. The system offers a complete solution for personnel (drivers and porters), shipment management, and shipping status tracking. Role-based access control and distinct dashboards for administrators and drivers are aspects of the program, which was developed with a **React.js frontend (using Vite)**, a **Node.js backend**, and a **MySQL database**.

The solution increases workforce management skills, expedites package management processes, and boosts delivery tracking effectiveness.

**Keywords:** Transportation Management, Full-stack Development, React.js, Node.js, MySQL, Role-based Access Control, Package Tracking, Logistics Management.

---

## I. Introduction

TransTrack addresses major inefficiencies in traditional logistics operations. The system automates shipment tracking, facilitates communication, and provides real-time updates via web dashboards, increasing accuracy and security with a clear separation between admin and driver roles.

---

## II. Objective

- Develop a secure, role-based web application for transportation companies.
- Enable real-time package tracking and delivery status updates.
- Provide intuitive dashboards for admins and drivers.
- Implement efficient worker (driver/porter) management.
- Categorize shipments as: pending, out for delivery, or delivered.

---

## III. Literature Survey

Traditional tools (manual logs, spreadsheets) are inefficient and error-prone. Complex commercial logistics platforms are too costly or inflexible for small businesses. The paper supports using modular, scalable full-stack tools like **React.js** and **Node.js** for cost-effective logistics solutions with real-time delivery updates and secure, role-based access.

---

## IV. Designed and Proposed Solution

**Architecture:**
- **Frontend:** React.js + Vite
- **Backend:** Node.js + Express.js
- **Database:** MySQL

**Key Features:**
1. Role-based authentication (admin/driver)
2. Package management: create, update, track
3. Worker admin: add/remove drivers or porters
4. Real-time status views
5. Search functionality
6. Responsive UI design

This modular and scalable setup allows future extensions like GPS, mobile app, and analytics.

---

## V. Project Flowchart

*(Insert flowchart diagram here if available)*

---

## VI. Web Page Overview

### Admin Dashboard
- Overview of shipment statuses
- Add new package orders
- Update package delivery status
- View delivered packages
- Add/remove employees

### Driver Dashboard
- Access to shipment overview
- Update delivery status
- View order history

---

## VII. Implementation Details

### Database
- MySQL database: `transtrack`
- Tables: `workers`, `packages`

### Backend
- Express.js server
- RESTful API with controllers:
  - Authentication
  - Package operations (CRUD)
  - Worker management
- Middleware for validation, authentication, and role authorization

### Frontend
- Built with React.js (Vite)
- Components for:
  - Login
  - Admin/Driver Dashboards
  - Package management
  - Worker management
- Context API for state management
- Responsive design via CSS modules
- Axios for secure API communication

---

## VIII. Result Analysis

- Role-based routing and permissions are functioning as intended.
- Real-time delivery updates are reflected immediately.
- Worker admin features allow seamless onboarding/removal.
- Search functionality enhances user efficiency.
- Responsive design ensures usability across devices.
- Backend performs CRUD operations efficiently under moderate load.

---

## IX. Discussion

### Key Achievements:
- Intuitive UI for admins and drivers
- Real-time delivery visibility
- Secure role-based operations

### Challenges:
- React state management complexity
- MySQL connection pooling under load
- Responsive dashboard design

### Future Enhancements:
1. Mobile app integration
2. GPS-based tracking
3. Customer notifications
4. Advanced analytics

---

## X. Conclusion

**TransTrack** delivers an efficient logistics management platform tailored for small to medium-sized transportation businesses. It meets all technical and user requirements using a modern full-stack approach, ensuring security, performance, and usability.

---

## XI. Reference Apps

1. ShipStation – Package management
2. ShipBob – Logistics platform
3. UPS Dashboard – Package tracking
4. FedEx Manager – Delivery management

---

