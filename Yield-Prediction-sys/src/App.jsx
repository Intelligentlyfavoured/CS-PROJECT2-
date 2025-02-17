import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Login from "./Auth/Login"
import AdminLogin from "./Auth/AdminLogin"
import AdminHome from "./Pages/AdminHome"
import Signup from "./Auth/Signup";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/AdminHome" element={<AdminHome />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/Signup" element={<Signup/>}/>
   </Routes>
    </Router>
  );
}

export default App;
