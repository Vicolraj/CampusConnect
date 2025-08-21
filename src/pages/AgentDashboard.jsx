import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

function AgentDashboard(){
  const { user, listings, addListing } = useAuth();
  const owned = listings.filter(l=> user?.listings?.includes(l.id));
  const [form, setForm] = useState({ name:"", price:"", gate:"North Gate", img:"", details:"" });

  const submit = (e)=>{
    e.preventDefault();
    if(!user){ return alert('Please login as Agent.'); }
    if(!form.name || !form.price){ return alert('Name and price are required.'); }
    const price = Number(form.price);
    const img = form.img || "https://images.unsplash.com/photo-1491884662610-dfcd28f30cf5?q=80&w=1600&auto=format&fit=crop";
    const newItem = { ...form, price, img };
    addListing(newItem);
    // Attach to user (mock)
    user.listings = Array.isArray(user.listings) ? [ ...user.listings ] : [];
    user.listings.unshift(newItem.id || "temp");
    setForm({ name:"", price:"", gate:"North Gate", img:"", details:"" });
    alert('Listing created (mock). It appears at the top of Listings.');
  };

  return (
    <div className="shell">
      <h2>Agent Dashboard</h2>
      <p className="muted">Create and manage your property listings.</p>

      <h3 style={{marginTop:18}}>Create New Listing</h3>
      <form onSubmit={submit} className="grid" style={{gap:12, maxWidth:740}}>
        <div className="row">
          <input className="input" placeholder="Apartment name" value={form.name} onChange={e=>setForm(s=>({...s, name:e.target.value}))} />
          <input className="input" type="number" min="0" placeholder="Price (₦)" value={form.price} onChange={e=>setForm(s=>({...s, price:e.target.value}))} />
        </div>
        <div className="row">
          <select className="select" value={form.gate} onChange={e=>setForm(s=>({...s, gate:e.target.value}))}>
            <option>North Gate</option>
            <option>South Gate</option>
            <option>West Gate</option>
          </select>
          <input className="input" placeholder="Image URL (optional)" value={form.img} onChange={e=>setForm(s=>({...s, img:e.target.value}))} />
        </div>
        <textarea className="textarea" rows={4} placeholder="Details (amenities, distance, utilities…)" value={form.details} onChange={e=>setForm(s=>({...s, details:e.target.value}))} />
        <button className="btn" type="submit">Publish Listing</button>
      </form>

      <h3 style={{marginTop:28}}>Your Listings</h3>
      {owned.length === 0 ? (
        <p className="muted">No listings yet. Create your first one above.</p>
      ) : (
        <table className="table">
          <thead><tr><th>Name</th><th>Gate</th><th>Price</th></tr></thead>
          <tbody>
            {owned.map(l=> (
              <tr key={l.id}><td>{l.name}</td><td>{l.gate}</td><td>₦{l.price.toLocaleString()}</td></tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AgentDashboard;