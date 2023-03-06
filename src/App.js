import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Squares from './components/SquaresAnim';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css'

// add layout component for correct semantic HTML
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Squares />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <NavBar />
      {/* <Header /> */}
      <Routes>
        {/* style={{ paddingTop: '5rem' }} */}
        <Route path="/home" element={<Layout><Home /></Layout>} index={true} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/Contact" element={<Layout><Contact /></Layout>} />
      </Routes>
      {/* <Header />
      <Footer /> */}
    </Router>
  );
};

export default App;

