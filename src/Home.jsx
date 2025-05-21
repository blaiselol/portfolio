import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '5rem',
      marginTop: '0',
      padding: '0 5rem'
    }}>
      <div style={{ flex: 1 }}>
        <h1>Hi, I'm Blaise Carrillo — Software Engineer</h1>
        <p>I'm a software engineer passionate about building reliable and impactful applications.  
        Check out my projects, skills, and background through the links above.</p>
        <div style={{ 
          display: 'flex',
          gap: '1rem',
          marginTop: '2rem',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <NavLink 
            to="/contact"
            style={{
              padding: '0.8rem 1.5rem',
              backgroundColor: '#90EE90',
              color: '#333333',
              borderRadius: '5px',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
          >
            Work With Me
          </NavLink>
          <NavLink 
            to="/projects"
            style={{
              padding: '0.8rem 1.5rem',
              backgroundColor: '#333333',
              color: '#ffffff',
              borderRadius: '5px',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
          >
            See My Work
          </NavLink>
        </div>
      </div>
      <div style={{ 
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          width: '300px',
          height: '300px',
          backgroundColor: '#333333',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#ffffff',
          fontSize: '1.2rem',
          borderRadius: '10px'
        }}>
          <img 
          src="/Profile.png"
          alt="Blaise Carrillo"
          style={{
            width: '300px',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '10px'
          }}
        />
        </div>
      </div>
    </div>
  )
} 