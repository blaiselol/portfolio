import React from 'react';
import { Link } from 'react-router-dom';

export default function Proj2() {
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
          Rebel Remind: A Chrome extension made for UNLV students
        </h1>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '1rem 0'
        }}>
          <video
            src="/RebelRemindVIdeo.mov"
            autoPlay
            loop
            muted
            playsInline
            style={{
              maxWidth: '900px',
              width: '100%',
              maxHeight: '600px',
              borderRadius: '18px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
              background: '#000',
              objectFit: 'cover'
            }}
          />
        </div>
        <div style={{ fontSize: '1.15rem', color: '#e0e0e0', maxWidth: '800px', margin: '0.7rem auto 0 auto', background: 'black', borderRadius: '16px', padding: '2.2rem 2rem' }}>
          <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem', fontWeight: 700 }}>Overview</h2>
          <p style={{ marginBottom: '2rem' }}>
            Rebel Remind is a Chrome extension built to help UNLV students stay organized by centralizing assignments, campus events, and deadlines from platforms like Canvas, the UNLV Involvement Center, and other university calendars. The extension provides customizable notifications, calendar integration, and productivity tools—all within a clean, browser-based interface.
          </p>
          <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>Contributions</h2>
          <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', lineHeight: 1.7 }}>
            <li><strong>Web Scraping:</strong> Developed robust scrapers to extract event data from multiple UNLV websites, including the Academic Calendar, Rebel Coverage, and the UNLV Events Calendar.</li>
            <li><strong>Database Management:</strong> Designed and maintained a structured SQL database using SQLAlchemy to store and organize event data from different sources.</li>
            <li><strong>Flask REST API:</strong> Built a RESTful API using Flask to serve event data to the frontend team, with well-documented endpoints supporting daily, weekly, and categorized queries.</li>
            <li><strong>AI-Powered Categorization:</strong> Integrated the OpenAI API to automatically categorize scraped events into student-friendly interest tags, improving personalization and filtering in the UI.</li>
          </ul>
          <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>Impact</h2>
          <p>
            These backend features enabled real-time access to clean, structured, and categorized event data—supporting a seamless frontend experience and reducing the cognitive load for students managing academic and extracurricular commitments.
          </p>
        </div>
      </div>
    </div>
  );
}
