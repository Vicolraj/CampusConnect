import React from 'react';
import { Link } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

export function AgentOnly({ children }){
  const { user } = useAuth();
  if(!user || user.role !== 'agent'){
    return (
      <div className="shell">
        <h2>Agents only</h2>
        <p className="muted">Please <Link to="/login">login</Link> as an Agent/Landlord to continue.</p>
      </div>
    );
  }
  return children;
}

export function StudentOnly({ children }){
  const { user } = useAuth();
  if(!user || user.role !== 'student'){
    return (
      <div className="shell">
        <h2>Students only</h2>
        <p className="muted">Please <Link to="/login">login</Link> as a Student to continue.</p>
      </div>
    );
  }
  return children;
}