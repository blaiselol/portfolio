import React from 'react';

export default function Contact() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'black',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        background: 'rgba(20, 20, 25, 0.95)',
        borderRadius: '32px',
        boxShadow: '0 4px 32px 0 rgba(0,0,0,0.25)',
        padding: '3rem 3.5rem',
        maxWidth: '950px',
        width: '100%',
        gap: '2.5rem',
      }}>
        {/* Left Side: Profile */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: '260px',
        }}>
          <img
            src="/Profile.png"
            alt="Profile"
            style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '1.5rem',
              border: '4px solid #232336',
            }}
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.7rem' }}>
            <span style={{ color: '#b0b3c6', fontWeight: 500 }}>Las Vegas, NV</span>
          </div>
        </div>
        {/* Right Side: Info */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, margin: 0, letterSpacing: '-2px' }}>Blaise Carrillo</h1>
          <h2 style={{ fontSize: '2rem', fontWeight: 500, margin: '0.3rem 0 1.5rem 0', color: '#b0b3c6' }}>Software Engineer</h2>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', justifyContent: 'center', alignItems: 'center', marginTop: '1.2rem' }}>
            <a 
              href="https://www.linkedin.com/in/blaise-carrillo-601a83241/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                padding: '0.2rem 1rem',
                backgroundColor: '#333',
                color: 'white',
                borderRadius: '5px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/blaiselol" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                padding: '0.2rem 1rem',
                backgroundColor: '#333',
                color: 'white',
                borderRadius: '5px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              GitHub
            </a>
            <a 
              href="mailto:blaise.carrillo@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Blaise%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!" 
              style={{
                padding: '0.2rem 1rem',
                backgroundColor: '#333',
                color: 'white',
                borderRadius: '5px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              Mail
            </a>
            <a 
              href="/Blaise_Carrillo.pdf" 
              download="Blaise_Carrillo_Resume.pdf"
              style={{
                padding: '0.2rem 1rem',
                backgroundColor: '#333',
                color: 'white',
                borderRadius: '5px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              Resume
            </a>
          </div>
          <p style={{ fontSize: '1.25rem', color: '#e0e0e0', lineHeight: 1.6, fontWeight: 400 }}>
          I'm a developer with a focus on creating interactive experiences through game development and application design. From building immersive 3D environments in Unreal Engine to developing functional, user-centered apps, I enjoy combining creativity with technical problem-solving. My work spans gameplay systems, UI/UX design, and performance optimization across both desktop and mobile platforms.
          </p>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  background: 'rgba(30,30,40,0.7)',
  color: '#b0b3c6',
  border: '1.5px solid #232336',
  borderRadius: '1.5rem',
  padding: '0.5rem 1.3rem',
  fontWeight: 600,
  fontSize: '1.05rem',
  textDecoration: 'none',
  transition: 'background 0.2s',
}; 