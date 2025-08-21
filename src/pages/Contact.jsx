import React, { useState } from 'react';

function Contact(){
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const submit = (e)=>{ e.preventDefault(); alert('Thanks! We will get back to you soon. (mock)'); setMsg(""); setEmail(""); };
  return (
    <div className="shell">
      <h2>Contact Us</h2>
      <p className="muted">Questions or feedback? Send us a note.</p>
      <form onSubmit={submit} className="grid" style={{gap:12, maxWidth:640}}>
        <input className="input" type="email" required placeholder="Your email" value={email} onChange={e=>setEmail(e.target.value)} />
        <textarea className="textarea" rows={5} placeholder="Message" value={msg} onChange={e=>setMsg(e.target.value)} />
        <button className="btn" type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;