import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

function Signup(){
  const { login } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState('student');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [valErr, setValErr] = useState('')
  

  

  const handle = (e)=>{
    e.preventDefault();
    // // Mock register then login
    // login({ role, name: name || (role==='student'?'Student':'Agent') });
    // navigate(role==='agent' ? '/agent' : '/listings');

        const err = [];
    if(!email){
      err.push('Email is required')
    }else if(!(password.length >= 8)){
      err.push('Password should be minimum of 8 character')
    }else if(!name){
      err.push('You didnt enter a Fullname')
    }else if (!mobileNumber){
      err.push('Phone number required')
    }else{
      const signupData = {student_name:name, password: password, phone_number: mobileNumber, email}
      if(role.toLowerCase() === 'student'){
      fetch(`https://campus-connect-hmkx.onrender.com/${role}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupData)
      }).then(res => res.json())
        .then(data => {

          if(data.token){
            localStorage.setItem('campusconnectusertoken', data.token)
            setValErr(<span color='green'>{data.message}</span>)
            login({ role, name: name || (role === 'student' ? 'Student' : 'Agent') });
            navigate(role === 'agent' ? '/agent' : '/listings');
          }else{
            setValErr(<span style={{color: "red"}}>{data.detail}</span>)
          }
        })
    }
    }
    setValErr (<span style = {{color: "red"}}>{err.join(",")}</span>)


    
  };

  return (
    <div className="shell">
      <h2>Create your account</h2>
      <p className="muted">Sign up as Student or Agent/Landlord.</p>
      <form onSubmit={handle} className="grid" style={{gap:12, maxWidth:640, marginTop:12}}>
        <div className="row">
          <select className="select" value={role} onChange={e=>setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="agent">Agent / Landlord</option>
          </select>
          <input className="input" placeholder="Full name" required value={name} onChange={e=>setName(e.target.value)} />
        </div>
        <div className="row">
          <input className="input" type="email" placeholder="Email" required value={email} onChange={e=>setEmail(e.target.value)} />
          <input className="input" type="password" placeholder="Password" required value={password} onChange={e=>setPassword(e.target.value)} />
          <input className="input" type="tel" placeholder="Phone number" required value={mobileNumber} onChange={e=>setMobileNumber(e.target.value)} />
        </div>
        <button className="btn" type="submit">Create account</button>
      </form>
       <br />
      {valErr}
    </div>
  );
}

export default Signup;