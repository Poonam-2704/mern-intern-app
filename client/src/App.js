import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Admin from './Admin';
import AdminLogin from './AdminLogin';

export default function App() {
  // Style objects for the navbar
  const navbarStyle = {
    background: 'linear-gradient(90deg, #3498db 60%, #8e44ad 100%)',
    color: '#fff',
    padding: '12px 25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 2px 8px rgba(52, 152, 219, 0.15)',
  };

  const logoStyle = {
    fontWeight: 'bold',
    fontSize: '1.7rem',
    letterSpacing: '1px',
    color: '#fff',
    textDecoration: 'none',
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '1.5em',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1.05rem',
    padding: '5px 12px',
    borderRadius: '4px',
    transition: 'background 0.2s',
    cursor: 'pointer',
  };

  const linkHoverStyle = {
    background: 'rgba(255,255,255,0.15)',
  };

  // State to track which nav link is hovered
  const [hoveredLink, setHoveredLink] = React.useState('');

  // New state for admin login status
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Handler for login success
  const handleLogin = () => {
    setIsAdminLoggedIn(true);
  };

  // Handler for logout
  const handleLogout = () => {
    setIsAdminLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <nav style={navbarStyle}>
        <Link to="/" style={logoStyle}>
          Basti ki Pathshala
        </Link>
        <div style={navLinksStyle}>
          <Link
            to="/"
            style={{
              ...linkStyle,
              ...(hoveredLink === 'home' ? linkHoverStyle : {}),
            }}
            onMouseEnter={() => setHoveredLink('home')}
            onMouseLeave={() => setHoveredLink('')}
          >
            Home
          </Link>
          <Link
            to="/register"
            style={{
              ...linkStyle,
              ...(hoveredLink === 'register' ? linkHoverStyle : {}),
            }}
            onMouseEnter={() => setHoveredLink('register')}
            onMouseLeave={() => setHoveredLink('')}
          >
            Register
          </Link>

          {/* Show Admin or Logout based on login */}
          {!isAdminLoggedIn ? (
            <Link
              to="/admin"
              style={{
                ...linkStyle,
                ...(hoveredLink === 'admin' ? linkHoverStyle : {}),
              }}
              onMouseEnter={() => setHoveredLink('admin')}
              onMouseLeave={() => setHoveredLink('')}
            >
              Admin
            </Link>
          ) : (
            <span
              onClick={handleLogout}
              style={{ ...linkStyle, cursor: 'pointer' }}
              title="Logout"
            >
              Logout
            </span>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Admin Route */}
        <Route
          path="/admin"
          element={
            isAdminLoggedIn ? (
              <Admin />
            ) : (
              <AdminLogin onLogin={handleLogin} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
