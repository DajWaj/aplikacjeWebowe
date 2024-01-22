import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './src/components/Home';
import About from './src/components/About';
import Contact from './src/components/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home title="Home" name="Your Name" />} />
        <Route path="/about" element={<About title="About" name="Your Name" />} />
        <Route path="/contact" element={<Contact title="Contact" name="Your Name" />} />
      </Routes>
    </Router>
  );
};

export default App;
