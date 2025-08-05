import React from 'react';

export default function Home() {
  // --- Styles ---
  const pageWrapperStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #b0c4de)',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center', // center container horizontally
  };
  const containerStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '20px',
    maxWidth: '1200px',
    margin: 'auto',
    textAlign: 'center',
    color: '#2c3e50',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    
  };

  const headerStyle = {
    fontSize: '2.7rem',
    marginBottom: '0.35em',
    fontWeight: '700',
  };

  const bannerStyle = {
    width: '100%',
    maxHeight: '320px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.19)',
    marginBottom: '20px',
    transition: 'transform 0.3s ease',
  };

  const sectionStyle = {
    marginBottom: '30px',
    padding: '0 8px',
  };

  const cardsContainer = {
    display: 'flex',
    justifyContent: 'center',
    gap: '28px',
    margin: '35px 0',
    flexWrap: 'wrap',
  };

  const cardStyle = {
    backgroundColor: '#f6fafd',
    borderRadius: '14px',
    padding: '22px 25px',
    width: '320px',
    boxShadow: '0 3px 16px rgba(52, 152, 219, 0.07)',
    cursor: 'pointer',
    transition: 'transform 0.22s',
    userSelect: 'none',
    border: '1.6px solid #d6eaf8',
    textAlign: 'left',
  };

  const cardHoverStyle = {
    transform: 'scale(1.04)',
    boxShadow: '0 6px 24px rgba(52, 152, 219, 0.13)',
  };

  const cardTitleStyle = {
    fontSize: '1.28rem',
    marginBottom: '10px',
    color: '#2076c0',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
  };

  const cardDescStyle = {
    fontSize: '1.08rem',
    color: '#34495e',
    lineHeight: '1.55',
  };

  const aboutStyle = {
    backgroundColor: '#3498db',
    color: '#fff',
    borderRadius: '12px',
    padding: '32px',
    textAlign: 'left',
    fontSize: '1.05rem',
    lineHeight: '1.65',
    marginBottom: '32px',
    boxShadow: '0 6px 22px rgba(52, 152, 219, 0.20)',
  };

  const footerStyle = {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '22px 18px',
    textAlign: 'center',
    borderRadius: '10px',
    marginTop: 'auto',
    fontSize: '0.97rem',
    boxShadow: '0 -2px 7px rgba(0,0,0,0.08)',
  };

  const footerLinksStyle = {
    marginTop: '12px',
    fontSize: '1.3rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '22px',
  };

  // --- State for hover effect ---
  const [hoveredCard, setHoveredCard] = React.useState(null);
  const [bannerHover, setBannerHover] = React.useState(false);

  return (
    <div style={pageWrapperStyle}>
    <div style={containerStyle}>
      {/* Header Section */}
      <header style={sectionStyle}>
        <h1 style={headerStyle}>Welcome to Basti ki Pathshala</h1>
        <img
          src="https://imgs.search.brave.com/W8K34kfB1ns1ToAED5kED2Z4RFNg5VW2x4dMsIHRKGE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDg3/MzMyNjM2L3Bob3Rv/L2FsbGFoYWJhZC11/dHRhci1wcmFkZXNo/LWluZGlhLXNjaG9v/bC1jaGlsZHJlbi1h/dHRlbmQtYS1jbGFz/cy1hdC1hLWdvdmVy/bm1lbnQtcnVuLXNj/aG9vbC1kdXJpbmcu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVQ1Z2hYYU05M3kx/N1pOc2R0ZjJKNnNl/elpGNTBVb3F2QjRC/TkZDeUYtTnM9"
          alt="Indian Government School"
          style={{
            ...bannerStyle,
            transform: bannerHover ? 'scale(1.02)' : 'scale(1)',
          }}
          onMouseEnter={() => setBannerHover(true)}
          onMouseLeave={() => setBannerHover(false)}
        />
        <p style={{ fontSize: '1.14rem', marginTop: '10px' }}>
          Please register or, if you are an admin, view applicants.
        </p>
      </header>

      {/* Choices Section (Only these as cards) */}
      <section style={sectionStyle}>
        <div style={cardsContainer}>
          <div
            style={{
              ...cardStyle,
              ...(hoveredCard === 'internship' ? cardHoverStyle : {}),
            }}
            onMouseEnter={() => setHoveredCard('internship')}
            onMouseLeave={() => setHoveredCard(null)}
            tabIndex={0}
          >
            <h3 style={cardTitleStyle}>Internship</h3>
            <p style={cardDescStyle}>
              Apply for exciting internship opportunities to gain experience and skills.
            </p>
          </div>
          <div
            style={{
              ...cardStyle,
              ...(hoveredCard === 'volunteer' ? cardHoverStyle : {}),
            }}
            onMouseEnter={() => setHoveredCard('volunteer')}
            onMouseLeave={() => setHoveredCard(null)}
            tabIndex={0}
          >
            <h3 style={cardTitleStyle}>Volunteer</h3>
            <p style={cardDescStyle}>
              Join our volunteer programs and make a positive impact in the community.
            </p>
          </div>
        </div>
      </section>

      {/* About Us (A regular section, NOT a card) */}
      <section style={aboutStyle}>
        <h2>About Us</h2>
        <p>
          Basti Ki Pathshala Foundation is a government-registered organization established under the Indian Societies Act of 1860.
          We are a grassroots initiative dedicated to breaking the barriers of education in underserved communities. Founded with a mission to provide quality education to children living in slum areas, we strive to create a nurturing learning environment where every child has the opportunity to thrive.
        </p>
        <p>
          Through innovative teaching methods, community engagement, and partnerships, we empower children with the knowledge and skills they need for a brighter future. Our commitment extends beyond the classroom as we work towards bridging the educational gap and fostering sustainable change in the lives of marginalized families.
        </p>
        <p>
          Join us in making a difference and building a brighter future together!
        </p>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>© {new Date().getFullYear()} Basti ki Pathshala Foundation. All rights reserved.</p>
        <p>Contact us: info@bastikipathshala.org | +91 98765 43210</p>
        <div style={footerLinksStyle}>
          <a
            href="https://facebook.com/BastiKiPathshala"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ecf0f1', textDecoration: 'none' }}
            aria-label="Facebook"
          >
            👍
          </a>
          <a
            href="https://twitter.com/BastiKiPathshala"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ecf0f1', textDecoration: 'none' }}
            aria-label="Twitter"
          >
            🐦
          </a>
          <a
            href="https://instagram.com/BastiKiPathshala"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ecf0f1', textDecoration: 'none' }}
            aria-label="Instagram"
          >
            📸
          </a>
        </div>
      </footer>
    </div>
    </div>
  );
}
