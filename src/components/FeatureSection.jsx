import React from 'react';
import { NavLink } from 'react-router';

const FeatureSection = ({ icon, title, description, link, linkText }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        <img src={icon} alt={title} />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
      {link && linkText && (
        <NavLink to={link} className="feature-link">
          {linkText}
        </NavLink>
      )}
    </div>
  );
};

export default FeatureSection;