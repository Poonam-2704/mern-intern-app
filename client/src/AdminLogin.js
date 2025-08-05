import React, { useState } from 'react';

export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Fixed credentials
  const fixedUsername = 'admin';
  const fixedPassword = 'password123';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === fixedUsername && password === fixedPassword) {
      setError('');
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{
      maxWidth: '400px', margin: '60px auto', padding: '25px',
      border: '1.5px solid #3498db', borderRadius: '10px'
    }}>
      <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '20px' }}>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        {error && <div style={{ color: 'red', marginBottom: '18px', fontWeight: 600 }}>{error}</div>}
        <input
          type="text" placeholder="Username" value={username}
          onChange={e => setUsername(e.target.value)} required
          style={{ width: '90%', padding: '10px 14px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem' }}
        />
        <input
          type="password" placeholder="Password" value={password}
          onChange={e => setPassword(e.target.value)} required
          style={{ width: '90%', padding: '10px 14px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem' }}
        />
        <button
          type="submit"
          style={{ width: '98%', padding: '12px', background: '#3498db', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}>
          Sign In
        </button>
      </form>
    </div>
  );
}
