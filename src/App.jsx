import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Proj1 from './Proj1'
import Proj2 from './Proj2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav style={{ 
        position: 'fixed',
        top: '1rem',
        left: '0',
        right: '0',
        display: 'flex', 
        gap: '1rem', 
        padding: '1rem 1rem',
        marginTop: '1rem',
        justifyContent: 'center',
        backgroundColor: '#333333',
        borderRadius: '15px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        width: 'fit-content',
        margin: '1rem auto'
      }}>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Me</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact Me</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/SiEGA" element={<Proj1 />} />
        <Route path="/projects/rebelremind" element={<Proj2 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
