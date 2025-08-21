import { Link, NavLink } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import logo from '/logo.png'

function Nav(){
  const { user, logout } = useAuth();
  const { cart } = useCart();
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand">
          <span className="brand-badge">
            <img src={logo} alt="" />
          </span>
          <span className="brand-title">CampusConnect</span>
        </Link>
        <div className="nav-links">
          <NavLink className={({isActive})=>`nav-link ${isActive? 'active':''}`} to="/listings">Listings</NavLink>
          <NavLink className={({isActive})=>`nav-link ${isActive? 'active':''}`} to="/about">About</NavLink>
          <NavLink className={({isActive})=>`nav-link ${isActive? 'active':''}`} to="/contact">Contact</NavLink>
          {user?.role === 'agent' && (
            <NavLink className={({isActive})=>`nav-link ${isActive? 'active':''}`} to="/agent">Agent Dashboard</NavLink>
          )}
          {user?.role === 'student' && (
            <NavLink className={({isActive})=>`nav-link ${isActive? 'active':''}`} to="/cart">Cart ({cart.length})</NavLink>
          )}
          {!user ? (
            <>
              <NavLink className={({isActive})=>`nav-link ${isActive? 'active':''}`} to="/login">Login</NavLink>
              <NavLink className={({isActive})=>`nav-link ${isActive? 'active':''}`} to="/signup">Signup</NavLink>
            </>
          ) : (
            <button className="btn ghost" onClick={logout}>Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;