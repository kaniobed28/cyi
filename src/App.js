import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import ThemeProvider and createTheme
import Header from './global_components/Header';
import Home from './Home/Home';
import About from './About/About';
import NotFound from './global_components/NotFound';
import Contact from './Contact/Contact';
import './App.css';

const theme = createTheme(); // Create a default theme

function App() {
  return (
    <ThemeProvider theme={theme}> {/* Wrap your app with ThemeProvider */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> {/* Fallback route */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
