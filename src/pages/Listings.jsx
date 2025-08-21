import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import ListingCard from '../components/ListingCard';
import { AnimatePresence } from "framer-motion";

function Listings(){
  const { listings } = useAuth();
  const [gate, setGate] = useState("All");
  const [q, setQ] = useState("");
  const filtered = listings.filter(x => (gate === "All" || x.gate === gate) && x.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="shell">
      <div className="toolbar">
        <select className="select" value={gate} onChange={e=>setGate(e.target.value)} style={{maxWidth:260}}>
          <option>All</option>
          <option>North Gate</option>
          <option>South Gate</option>
          <option>West Gate</option>
        </select>
        <input className="input" placeholder="Search by apartment name…" value={q} onChange={e=>setQ(e.target.value)} style={{maxWidth:420}} />
      </div>
      <div className="grid cards">
        <AnimatePresence initial={false} mode="wait">
            {filtered.map(item => (<ListingCard key={item.id} item={item} />))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Listings;