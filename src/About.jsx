import React from 'react'

export default function About() {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      marginTop: '6rem',
      padding: '0 5rem'
    }}>
      <div style={{ 
        display: 'flex',
        gap: '3rem',
        alignItems: 'flex-start'
      }}>
        {/* Photo Section */}
        <div style={{ 
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            width: '200px',
            height: '200px',
            backgroundColor: '#333333',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#ffffff',
            fontSize: '1.2rem',
            borderRadius: '50%',
            overflow: 'hidden'
          }}>
            <img 
              src="/Profile.png"
              alt="Blaise Carrillo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          <p style={{
            textAlign: 'center',
            marginTop: '1rem',
            color: 'white',
            fontSize: '1.1rem'
          }}>
            Las Vegas, NV
          </p>
        </div>

        {/* About Text Section */}
        <div style={{ 
          flex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '100%'
        }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            marginBottom: '0',
            lineHeight: '1.1',
            textAlign: 'left',
            width: '100%'
          }}>Blaise Carrillo</h1>
          <h2 style={{ 
            fontSize: '1.8rem', 
            fontWeight: '400',
            marginTop: '0',
            marginBottom: '0.9rem',
            color: '#90EE90',
            lineHeight: '1.2',
            textAlign: 'left',
            width: '100%'
          }}>Software Engineer</h2>
          <div style={{ 
            display: 'flex',
            gap: '1rem',
            justifyContent: 'flex-start',
            marginBottom: '1.5rem',
            width: '100%'
          }}>
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
              href="/Resume.pdf" 
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
              Resume
            </a>
          </div>
          <p style={{ 
            fontSize: '1.2rem', 
            lineHeight: '1.6',
            textAlign: 'left',
            width: '100%',
            marginBottom: '2rem'
          }}>
            I'm a software engineer with a passion for creating impactful applications. 
            With a strong foundation in game development and interactive application design, 
            I strive to build solutions that are not only functional but also user-friendly and scalable.
          </p>

          {/* Work Experience Section */}
          <div style={{ width: '100%', marginBottom: '2rem', textAlign: 'left' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Work Experience</h2>
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.3rem'
                }}>
                  <h3 style={{ fontSize: '1.4rem', margin: 0 }}>AERO AI</h3>
                  <p style={{ color: 'white', margin: 0 }}>January 2025 - Present</p>
                </div>
                <p style={{ fontSize: '1.2rem', color: '#90EE90', marginBottom: '0.5rem' }}>Software Engineer Intern</p>
                <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Developed and optimized features in <strong>SiEGA</strong>, an Unreal Engine–based platform for drone map visualization, improving performance, stability, and feature depth.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Collaborated with engineers, architects, and designers to improve the <strong>UI/UX</strong> and streamline workflows for interacting with 3D geospatial data.</li>
                  <li>Led daily stand-ups and sprint planning, offering updates and surfacing roadblocks to maintain team momentum.</li>
                </ul>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.3rem'
                }}>
                  <h3 style={{ fontSize: '1.4rem', margin: 0 }}>Vision Buddy</h3>
                  <p style={{ color: 'white', margin: 0 }}>April 2024 - December 2024</p>
                </div>
                <p style={{ fontSize: '1.2rem', color: '#90EE90', marginBottom: '0.5rem' }}>Software Developer</p>
                <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Improved real-time tracking accuracy in a gesture recognition system by refining and optimizing algorithms, enabling seamless detection of <strong>3+ distinct gestures</strong> during testing.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Diagnosed and resolved recurring <strong>TV transmitter issues</strong> in coordination with an international manufacturing team; introduced preventive procedures to reduce future errors.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div style={{ width: '100%', marginBottom: '2rem', textAlign: 'left' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Education</h2>
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.3rem' }}>B.S. in Computer Science</h3>
                <p style={{ color: 'white', marginBottom: '0.5rem' }}>University of Las Vegas, Nevada • 2021 - 2025</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div style={{ width: '100%', textAlign: 'left' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Skills</h2>
            <div style={{ 
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#333333',
                borderRadius: '5px',
                color: '#ffffff'
              }}>JavaScript</div>
              <div style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#333333',
                borderRadius: '5px',
                color: '#ffffff'
              }}>React</div>
              <div style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#333333',
                borderRadius: '5px',
                color: '#ffffff'
              }}>Node.js</div>
               <div style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#333333',
                borderRadius: '5px',
                color: '#ffffff'
              }}>C++</div>
               <div style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#333333',
                borderRadius: '5px',
                color: '#ffffff'
              }}>Unreal Engine</div>
               <div style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#333333',
                borderRadius: '5px',
                color: '#ffffff'
              }}>Python</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 