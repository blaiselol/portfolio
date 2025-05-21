import React from 'react';
import { Link } from 'react-router-dom';

export default function Proj1() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'black',
      color: 'white',
      padding: '0 0 4rem 0'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '7rem 1.5rem 0 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Link to="/projects" style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'black',
            color: 'white',
            borderRadius: '999px',
            padding: '0.4rem 1.2rem',
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: '1.1rem',
            marginBottom: '0.2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
          }}>
            <span style={{ fontSize: '1.3rem', marginRight: '0.7rem' }}>&larr;</span> Projects
          </Link>
        </div>
        <h1 style={{
          fontSize: '3.2rem',
          fontWeight: 800,
          marginBottom: '1rem',
          lineHeight: 1.1
        }}>
          SiEGA: Simulated Environment for Geospatial Assets
        </h1>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '1rem 0'
        }}>
          <img
            src="/SiEGA.PNG"
            alt="SiEGA Platform Screenshot"
            style={{
              maxWidth: '900px',
              width: '100%',
              maxHeight: '600px',
              borderRadius: '18px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.10)'
            }}
          />
        </div>
        <div style={{ fontSize: '1.15rem', color: '#e0e0e0', maxWidth: '800px', margin: '0.7rem auto 0 auto', background: 'black', borderRadius: '16px', padding: '2.2rem 2rem' }}>
          <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem', fontWeight: 700 }}>Overview</h2>
          <p style={{ marginBottom: '2rem' }}>
            SiEGA is an Unreal Engine–based platform designed for the AECO industry, transforming complex geospatial data—like drone imagery, point clouds, and BIM models—into immersive, interactive 3D environments. The platform helps professionals visualize, communicate, and collaborate more effectively on site plans and architectural designs.
          </p>
          <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>Contributions</h2>
          <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', lineHeight: 1.7 }}>
            <li><strong>Draw & Measure Tools:</strong> Developed tools that allow users to draw annotations and measure distances within the 3D scene to enhance spatial analysis and communication.</li>
            <li><strong>Avatar Selection:</strong> Implemented functionality for switching between preset avatars to improve user presence and personalization during presentations.</li>
            <li><strong>Export Features:</strong> Enabled the ability to export high-resolution images and video clips directly from the platform, supporting documentation and sharing.</li>
            <li><strong>Animated Camera Paths:</strong> Built a system for defining animated camera movements, allowing users to create cinematic walkthroughs and automated flythroughs for client demonstrations.</li>
          </ul>
          <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>Impact</h2>
          <p>
            These tools significantly improved the platform's usability for design reviews, stakeholder presentations, and construction planning—making SiEGA a more comprehensive solution for visualizing and sharing project data in 3D.
          </p>
        </div>
      </div>
    </div>
  );
} 