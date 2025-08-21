import React from 'react';

function About(){
  return (
    <div className="shell">
      <h2>About CampusConnect</h2>
      <p className="muted">CampusConnect is a student-first marketplace for off-campus housing around the main campus gates. We make it easy to compare rooms, understand costs, and contact verified agents.</p>
      <ul style={{lineHeight:1.9}}>
        <li>• Listings grouped by North, South, and West Gates</li>
        <li>• Clear pricing and photos</li>
        <li>• Cart + mock checkout for quick reservations</li>
      </ul>
    </div>
  );
}

export default About;