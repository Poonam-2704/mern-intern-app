import axios from 'axios';
import React, { useState } from 'react';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interests: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/applicants', form);
    setMessage('Registration successful!');
    setForm({ name: '', email: '', phone: '', interests: '' });
  };

  // --- Styles ---
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '50px',
    padding: '30px 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: '900px',
    margin: 'auto',
  };

  const formStyle = {
    flexBasis: '400px',
    backgroundColor: '#f9f9f9',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
  };

  const inputStyle = {
    width: '90%',
    padding: '12px 15px',
    marginBottom: '15px',
    borderRadius: '6px',
    border: '1.8px solid #ccc',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s',
  };

  const selectStyle = {
    ...inputStyle,
    cursor: 'pointer',
    backgroundColor: 'white',
  };

  const buttonStyle = {
    width: '100%',
    backgroundColor: '#3498db',
    color: 'white',
    fontWeight: '600',
    fontSize: '1.1rem',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 9px rgba(52, 152, 219, 0.4)',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#2980b9',
  };

  const messageStyle = {
    marginTop: '15px',
    color: '#27ae60',
    fontWeight: '600',
    textAlign: 'center',
  };

  const imageContainerStyle = {
    flexBasis: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '15px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
  };

  // For hover effect on button (optional)
  const [isHover, setIsHover] = React.useState(false);

  return (
    <div style={containerStyle}>
      <form
        style={formStyle}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#2c3e50' }}>
          Intern/Volunteer Registration
        </h2>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = '#3498db')}
          onBlur={(e) => (e.target.style.borderColor = '#ccc')}
        />

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = '#3498db')}
          onBlur={(e) => (e.target.style.borderColor = '#ccc')}
        />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = '#3498db')}
          onBlur={(e) => (e.target.style.borderColor = '#ccc')}
        />

        <select
          name="interests"
          value={form.interests}
          onChange={handleChange}
          required
          style={selectStyle}
        >
          <option value="" disabled>
            Select Type
          </option>
          <option value="Internship">Internship</option>
          <option value="Volunteer">Volunteer</option>
        </select>

        <button
          type="submit"
          style={isHover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          Register
        </button>

        {message && <p style={messageStyle}>{message}</p>}
      </form>

      <div style={imageContainerStyle}>
        <img
          src="https://imgs.search.brave.com/rPr5jPclg4pZAuqpGPLB1cKrp_KUYJn4KE_dLxOiocE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA1/Nzk3MDU0Ni92ZWN0/b3IvbWFuLWhvbGQt/cmVnaXN0cmF0aW9u/LWNsaXBib2FyZC1m/bGF0LWljb24uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVVF/cVRiSXJCcGE5NHZM/YVR1dnFDcmRWdEx3/bVpsbHl5cVJQamc4/dDlibGM9"
          alt="Registration Illustration"
          style={imageStyle}
        />
      </div>
    </div>
  );
}
