// components/Footer.jsx
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h3 style={styles.heading}>Transtrack</h3>
          <p>Efficient goods and package tracking system for transport businesses.</p>
        </div>

        <div style={styles.section}>
          <h4 style={styles.heading}>Contact</h4>
          <p>Email: support@transtrack.com</p>
          <p>Phone: +91 11111 11111</p>
        </div>

        <div style={styles.section}>
          <h4 style={styles.heading}>Follow Us</h4>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      <div style={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Transtrack. All rights reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: '#007BFF',
    color: '#fff',
    marginTop: '2rem',
    paddingTop: '1.5rem',
    paddingBottom: '1rem',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '0 1rem',
    gap: '1rem',
  },
  section: {
    flex: '1 1 200px',
  },
  heading: {
    marginBottom: '0.5rem',
  },
  iconLink: {
    marginRight: '1rem',
    color: '#fff',
    textDecoration: 'none',
  },
  bottom: {
    textAlign: 'center',
    marginTop: '1rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.3)',
    paddingTop: '0.5rem',
  },
};

export default Footer;