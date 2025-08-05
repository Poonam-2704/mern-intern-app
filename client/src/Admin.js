import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Admin() {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/applicants')
      .then(res => setApplicants(res.data))
      .catch(err => console.error(err));
  }, []);

  // --- Styles ---

  const containerStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: '900px',
    margin: '40px auto',
    padding: '0 20px',
  };

  const headerStyle = {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '30px',
    fontSize: '2rem',
    fontWeight: '700',
  };

  const listStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
  };

  const cardStyle = {
    backgroundColor: '#ecf0f1',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease-in-out',
    cursor: 'default',
  };

  const cardHoverStyle = {
    transform: 'scale(1.03)',
  };

  const nameStyle = {
    fontWeight: '700',
    fontSize: '1.25rem',
    marginBottom: '10px',
    color: '#34495e',
  };

  const infoStyle = {
    fontSize: '1rem',
    color: '#555',
    margin: '4px 0',
  };

  // For hover effect on cards
  const [hoveredCardId, setHoveredCardId] = useState(null);

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Admin: Applicants List</h2>
      {applicants.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888', fontSize: '1.1rem' }}>
          No applicants found.
        </p>
      ) : (
        <div style={listStyle}>
          {applicants.map(app => (
            <div
              key={app._id}
              style={{
                ...cardStyle,
                ...(hoveredCardId === app._id ? cardHoverStyle : {}),
              }}
              onMouseEnter={() => setHoveredCardId(app._id)}
              onMouseLeave={() => setHoveredCardId(null)}
            >
              <div style={nameStyle}>{app.name}</div>
              <div style={infoStyle}><b>Email:</b> {app.email}</div>
              <div style={infoStyle}><b>Phone:</b> {app.phone}</div>
              <div style={infoStyle}><b>Interest:</b> {app.interests}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
