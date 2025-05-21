import React from 'react'

const projects = [
  {
    title: 'SiEGA',
    description: 'SiEGA is an Unreal Engine–based platform that turns geospatial data into immersive 3D visuals, helping AECO professionals visualize designs, collaborate efficiently, and streamline workflows.',
    image: '/SiEGA.PNG', // Replace with your actual image path
    author: {
      name: 'Blaise Carrillo',
      avatar: '/Profile.png', // Replace with your actual avatar path
    },
    link: '#',
    linkText: 'Read More'
  },
  {
    title: 'Rebel Remind',
    description: 'Rebel Remind is a Chrome extension built by UNLV students to help peers stay on top of assignments, events, and deadlines by pulling data from Canvas, UNLV calendars, and more into one clean, customizable interface. Developed with React and Flask, it features pop-up notifications, a Pomodoro timer, and Google integration—making student life more organized and less stressful.',
    image: '/RebelRemind.png', // Replace with your actual image path
    author: {
      name: 'Blaise Carrillo',
      avatar: '/Profile.png',
    },
    link: '#',
    linkText: 'Read More'
  }
];

export default function Projects() {
  return (
    <div style={{
      background: 'black',
      minHeight: '100vh',
      padding: '4rem 0',
      color: 'white'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-2px' }}>My Work</h1>
        <p style={{ fontSize: '2rem', color: '#b0b3c6', marginBottom: '3rem', fontWeight: 400 }}>
          Below is a brief overview of some of the work and projects I have completed in recent years.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {projects.map((project, idx) => {
            const isFirst = idx === 0;
            return (
              <div key={idx} style={{
                display: 'flex',
                background: 'rgba(20, 20, 25, 0.95)',
                borderRadius: '20px',
                boxShadow: '0 4px 32px 0 rgba(0,0,0,0.25)',
                overflow: 'hidden',
                alignItems: 'stretch',
                border: '1px solid #232336',
                marginBottom: '2.5rem',
                minHeight: '220px'
              }}>
                <div style={{
                  flex: isFirst ? '0 0 500px' : '0 0 340px',
                  width: isFirst ? 500 : 340,
                  display: isFirst ? 'block' : 'flex',
                  alignItems: isFirst ? undefined : 'center',
                  justifyContent: isFirst ? undefined : 'center',
                  background: 'rgba(20, 20, 25, 0.95)',
                  padding: '0'
                }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: isFirst ? 'auto' : '100%',
                      borderRadius: isFirst ? '24px' : '12px',
                      objectFit: isFirst ? 'contain' : 'cover',
                      background: 'black',
                      display: 'block'
                    }}
                  />
                </div>
                <div style={{
                  flex: 1,
                  maxWidth: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    padding: isFirst ? '0 2rem' : '0.5rem 2rem 2.5rem 2rem',
                    height: isFirst ? 'auto' : '100%',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginTop: isFirst ? '0' : 0,
                    paddingTop: isFirst ? '1.5rem' : 0,
                  }}>
                    <h2 style={{ fontSize: isFirst ? '1.1rem' : '1.4rem', fontWeight: 700, margin: isFirst ? '0' : '0', color: 'white', paddingBottom: isFirst ? '0.2rem' : 0 }}>{project.title}</h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', margin: isFirst ? '0.3rem 0 0.5rem 0' : '0.7rem 0 1.2rem 0' }}>
                      <img src={project.author.avatar} alt={project.author.name} style={{ width: isFirst ? '24px' : '32px', height: isFirst ? '24px' : '32px', borderRadius: '50%' }} />
                      <span style={{ color: '#b0b3c6', fontWeight: 500, fontSize: isFirst ? '0.95rem' : '1.1rem' }}>{project.author.name}</span>
                    </div>
                    <p style={{ color: '#b0b3c6', fontSize: isFirst ? '0.92rem' : '1.15rem', margin: isFirst ? '0 0 0 0' : '0 0 1rem 0', lineHeight: 1.5 }}>{project.description}</p>
                    <a href={project.link} style={{ color: '#90EE90', fontWeight: 600, textDecoration: 'none', fontSize: isFirst ? '0.95rem' : '1.15rem', display: 'inline-block', marginTop: isFirst ? '1.2rem' : 0 }}
                      {...(isFirst ? { href: '/projects/SiEGA' } : idx === 1 ? { href: '/projects/rebelremind' } : {})}
                    >
                      {project.linkText} <span style={{ fontSize: '1.2em' }}>&#8594;</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
} 