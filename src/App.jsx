import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import './app.css'; // Assuming you have a CSS file

// Components
import Nav from './components/Nav';

// Context Providers
import AppProviders from './contexts/AppProviders';

// Pages
import Home from './pages/Home';
import Listings from './pages/Listings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AgentDashboard from './pages/AgentDashboard';
import CartPage from './pages/CartPage';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Utils
import { AgentOnly, StudentOnly } from './utils/PrivateRoutes';

export default function App(){
  return (
    <BrowserRouter>
      <AppProviders>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/agent" element={<AgentOnly><AgentDashboard /></AgentOnly>} />
          <Route path="/cart" element={<StudentOnly><CartPage /></StudentOnly>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <footer className="footer">© {new Date().getFullYear()} CampusConnect</footer>
      </AppProviders>
    </BrowserRouter>
  );
}