import React from 'react';
import { Link } from 'react-router';
import OurOffer from '../components/OurOffer';
import Carousel from '../components/Carousel';
import FeatureSection from '../components/FeatureSection';

import icon1 from '../assets/img/features-icon-3.png'; 
import icon2 from '../assets/img/shape-8.png';
import icon3 from '../assets/img/features-icon-2.png';

function Home(){
  return (
    <div className="shell">
      <Carousel />
      <section className="hero">
        <div>
          <h1>Find your next campus home, fast.</h1>
          <p>Browse verified off‑campus apartments by gate location, compare prices, save to cart, and checkout when you’re ready. Agents and landlords can list properties in minutes.</p>
          <div className="toolbar" style={{marginTop:16}}>
            <Link to="/listings" className="btn">Explore Listings</Link>
            <Link to="/signup" className="btn ghost">Get Started</Link>
          </div>
          <ul className="muted" style={{lineHeight:1.8}}>
            <li>• Filter by North, South, or West Gate</li>
            <li>• Clear pricing, photos, and details</li>
            <li>• Simple cart + mock checkout (no real payments)</li>
          </ul>
        </div>
        <div className="hero-card">
          <strong>Why CampusConnect?</strong>
          <p className="muted">We streamline student housing around campus gates. No noise—just the info you need to decide quickly.</p>
          <div className="row" style={{marginTop:12}}>
            <div className="hero-card" style={{background:'rgba(255,255,255,.02)'}}>
              <div className="pill">Students</div>
              <h4 style={{margin:'8px 0 4px'}}>Search & Checkout</h4>
              <p className="muted">Compare options and reserve your room with a simple, guided flow.</p>
            </div>
            <div className="hero-card" style={{background:'rgba(255,255,255,.02)'}}>
              <div className="pill">Agents/Landlords</div>
              <h4 style={{margin:'8px 0 4px'}}>List in Minutes</h4>
              <p className="muted">Create listings, manage inventory, and reach students faster.</p>
            </div>
          </div>
        </div>
      </section>
        <div className="feature-grid">
      <FeatureSection
        icon={icon1}
        title="Browse Listings"
        description="Find your next home with thousands of listings near campus."
        link="/listings"
        linkText="Explore Listings"
      />
      <FeatureSection
        icon={icon2}
        title="Save Favorites"
        description="Add properties to your cart to review and compare later."
        link="/cart"
        linkText="View Cart"
      />
      <FeatureSection
        icon={icon3}
        title="For Landlords & Agents"
        description="Manage your properties, review inquiries, and connect with students."
        link="/agent"
        linkText="Agent Dashboard"
      />
    </div>

      <OurOffer />
    </div>
  );
}

export default Home;