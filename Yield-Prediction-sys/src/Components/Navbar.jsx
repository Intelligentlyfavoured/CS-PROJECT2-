import { Link } from "react-router-dom";
import "../App.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
  
      <h1 className="logo">🌾 AI Yield Prediction</h1>

  
      <div className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/dashboard" className="nav-item">Dashboard</Link>
        <Link to="/about" className="nav-item">About</Link>
      </div>

      
      <div className="auth-buttons">
        <Link to="/login" className="navbar-login-btn">Login</Link>
        <Link to="/signup" className="navbar-signup-btn">Signup</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="menu-btn">
        <button>☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
