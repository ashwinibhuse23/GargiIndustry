import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'

function ScriptLoader() {
  const location = useLocation();
  
  useEffect(() => {
    // Remove existing script if any
    const existingScript = document.getElementById('template-main-js');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Create and append the new script so it executes after React DOM is ready
    const script = document.createElement('script');
    script.src = '/assets/js/main.js';
    script.id = 'template-main-js';
    script.async = false;
    document.body.appendChild(script);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScriptLoader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
