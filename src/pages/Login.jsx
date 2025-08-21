import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

function Login(){
  const { login } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valErr, setValErr] = useState('')

  const handle = (e)=>{
    e.preventDefault();
  

    const err = [];
    if(!email){
      err.push('Email is required')
    }else if(!(password.length >= 8)){
      err.push('Password should be minimum of 8 character')
      
    }else{
    //   const loginData = {email, password}
    //   fetch('https://campus-connect-hmkx.onrender.com/student/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(loginData)
    //   }).then(res => res.text())
    //     .then(data => {
    //       // localStorage.setItem('campusconnectusertoken', data.token)
    //       // alert(data)

    //         login({ role, email: email || (role==='student'?'Student':'Agent') });
    // navigate(role==='agent' ? '/agent' : '/listings');
    //     })

              login({ role, email: email || (role==='student'?'Student':'Agent') });
    navigate(role==='agent' ? '/agent' : '/listings');
    }

    setValErr (<span style = {{color: "red"}}>{err.join(",")}</span>)



  };

  return (
    <div className="shell">
      <h2>Login</h2>
      <p className="muted">Choose your role to continue.</p>
      <form onSubmit={handle} className="form" style={{gap:12, maxWidth:360, marginTop:12}}>
        <div>
          <select className="select" value={role} onChange={e=>setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="agent">Agent / Landlord</option>
          </select> <br />
          <input className="input" placeholder="Your email" type='email' value={email} onChange={e=>{setEmail(e.target.value); setValErr('')}} /> <br />
          <input className="input" min='8' type="password" email="password" id="password" value={password} placeholder="Password" onChange={e=>{setPassword(e.target.value); setValErr('')}}  />
        </div>
        <button className="btn" type="submit">Login</button>
      </form>
      <br />
      {valErr}
    </div>
  );
}

export default Login;